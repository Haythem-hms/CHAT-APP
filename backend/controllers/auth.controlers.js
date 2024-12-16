import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokensAndSetCookies from "../utils/generateToken.js";



export const login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect){
            return res.status(400).json({message: "Invalid username or password"});
        }
        generateTokensAndSetCookies(user._id, res);
        res.status(200).json({
            _id : user._id,
            fullname: user.fullname,
            email: user.email,
            profilePicture : user.profilePicture,
        });
    }
    catch(error){
        console.log ("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server Error"});
    }
}

export const logOut =  (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message: "Logged out successfully"});
    }
    catch(error){
        console.log ("Error in logout controller", error.message);
        res.status(500).json({error:"Internal server Error"});
    }
};

export const signUp = async(req, res) => {
    try{
        const {fullname , email , password , confirmPassword , gender} = req.body;
        
        if(password != confirmPassword){
           return res.status(400).json({error:"Passwords don't match"})
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({error:"the email is already have been used try another one"})
        }
        // Hashed Password

        
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);

        // api for users

        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${fullname}`
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${fullname}`

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture
        });
        if (newUser){
            // generate JWT tokens

            try {
                generateTokensAndSetCookies(newUser._id, res);
            } catch (tokenError) {
                console.error("Erreur lors de la génération des tokens :", tokenError.message);
                return res.status(500).json({ error: "Erreur interne lors de la création des tokens." });
            }

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePicture: newUser.profilePicture
            });
        }
        else {
            res.status(400).json({error : "Invalid user data"});
        }

    }
    catch(error){
        console.log ("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server Error"});
    }
};

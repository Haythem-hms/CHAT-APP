import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) =>{
    try {
        const loggedInUserId = req.user._id;


        const filtredUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filtredUsers);
        console.log("filter of users went successfull");
    }
    catch(error){
        console.log(error.message , "there's a problem in the getUsersForSidebar function");
        res.status(500).json({error : "Internal server error"});
    }
}
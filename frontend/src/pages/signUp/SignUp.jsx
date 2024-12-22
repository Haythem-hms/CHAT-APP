import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs); // Appel de la méthode signup
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> Chat Application</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-slate-50">Fullname</span>
                        </label>
                        <input
                            type="text"
                            placeholder="enter your Full name"
                            className="w-full input input-bordered h-10"
                            value={inputs.fullname}
                            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-slate-50">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="enter your email"
                            className="w-full input input-bordered h-10"
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-slate-50">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="enter your password"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-slate-50">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="confirm your password"
                            className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-slate-50">
                        Already have an account?
                    </Link>
                    <div>
                        <button
                            type="submit"
                            className={`btn btn-block btn-sm mt-2 border border-slate-700 ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={loading}
                        >
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

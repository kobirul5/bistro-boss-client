import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bgImag from "../../assets/others/authentication.png"
import authImag from "../../assets/others/authentication2.png"
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
   
    }

   

    return (
        <div
            style={{
                backgroundImage: `url(${bgImag})`,
            }}
            className="min-h-screen flex items-center justify-center">
            <div
                style={{
                    backgroundImage: `url(${bgImag})`,
                }}
                className=" shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Left Side with Image */}
                <div className="md:w-1/2 flex items-center justify-center">
                    <img
                        src={authImag} // Replace with your image URL
                        alt="Illustration"
                        className="w-3/4"
                    />
                </div>

                {/* Right Side with Login Form */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type here your Name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type here your email"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                            />
                        </div>
                       
                        <div className="form-control">
                            <input className="btn btn-primary w-full" type="submit" value="Sign Up"/>
                        </div>
                    </form>
                    <p className="text-center mt-4">
                        <a href="/register" className="text-blue-500">
                            New here? Create a New Account
                        </a>
                    </p>
                    <div className="divider">Or sign in with</div>
                    <div className="flex justify-center space-x-4">
                        <button className="btn btn-circle btn-outline">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle btn-outline">
                            <FaGithub />
                        </button>
                        <button className="btn btn-circle btn-outline">
                            <FaFacebook />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

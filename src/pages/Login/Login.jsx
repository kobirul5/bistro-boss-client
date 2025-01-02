import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bgImag from "../../assets/others/authentication.png"
import authImag from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const captchaREf = useRef(null)
    const [disable, setDisable] = useState(true)
    const { signin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signin(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const handleValidationCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {

            setDisable(false)
        }

    }

    return (
        <div
            style={{
                backgroundImage: `url(${bgImag})`,
            }}
            className="min-h-screen flex items-center py-24 justify-center">
            <Helmet>
                <title>Login || Bistro Boss</title>
            </Helmet>
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
                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type here"
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
                        <div className="form-control mb-4">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                onBlur={handleValidationCaptcha}
                                placeholder="Type the Captcha"
                                className="input input-bordered w-full"
                            />
                           
                        </div>
                        <div className="form-control">
                            <input className="btn btn-primary w-full" type="submit" value="Login" disabled={disable} />
                        </div>
                    </form>
                    <p className="text-center mt-4">
                        <Link to="/signUp" className="text-blue-500">
                            New here? Create a New Account
                        </Link>
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

export default Login;

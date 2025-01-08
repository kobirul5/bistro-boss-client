
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                console.log(userInfo)
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res)
                        Swal.fire({
                            position: "top-right",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                    })


            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    return (
        <div>
            <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default GoogleLogin;
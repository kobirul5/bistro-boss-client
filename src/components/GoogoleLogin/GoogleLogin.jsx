
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
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
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart] = useCart()


    const handleLogout = () => {
        logoutUser()
            .then(res => {

            })
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Now</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/dashboard/cart" className="btn">
            <FaCartShopping />
            <div className="badge badge-secondary">{cart.length}</div>
        </Link></li>
        <li>
            {
                user ? <>
                    <button onClick={handleLogout} className="btn btn-ghost py-0" to="/login">Log Out</button>
                </> : <>
                    <Link to="/login">Login</Link>
                </>
            }
        </li>

    </>

    return (
        <div className="navbar fixed z-10 text-white bg-opacity-20 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="text-xl font-bold">BISTO BOSS <br /> <span className="text-sm">RESTAURANT</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
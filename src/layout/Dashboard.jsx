import { FaHome, FaPlus, FaList, FaClipboardList, FaUtensils, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    const isExitAdmin = true

    return (
        <div>
            <div className="flex min-h-screen">
                {/* Left Sidebar */}
                <div className="bg-dashboard-primary   w-1/5 p-4">
                    <h1 className="text-xl font-bold mb-8">Bistro Boss Restaurant</h1>
                    <ul className="space-y-4 uppercase">
                        {
                            isExitAdmin ?
                                <>
                                    <li className="flex items-center space-x-2">
                                        <NavLink className="flex items-center space-x-2" to="/dashboard/adminHome">
                                            <FaHome />
                                            <Link to='/' className="font-semibold">Admin Home</Link>
                                        </NavLink>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <NavLink className="flex items-center space-x-2" to="/dashboard/ addItem">
                                            <FaPlus />
                                            <span className="font-semibold">Add Item</span>
                                        </NavLink>

                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <NavLink className="flex items-center space-x-2" to="/dashboard/ manageBookings">
                                            <FaClipboardList />
                                            <span className="font-semibold">Manage Bookings</span>
                                        </NavLink>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <NavLink className="flex items-center space-x-2" to="/dashboard/ allUsers">

                                            <FaList />
                                            <span className="font-semibold">All Users</span>
                                        </NavLink>
                                    </li>
                                </> : <>

                                </>
                        }
                        {/* share nav section */}
                        <div className="divider" ></div>

                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2 ">
                                <FaHome />
                                <span className="font-semibold">Home</span>
                            </NavLink>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/dashboard/ adminHome">

                            </NavLink>
                            <FaUtensils />
                            <span className="font-semibold">Menu</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/dashboard/ adminHome">

                            </NavLink>
                            <FaShoppingCart />
                            <span className="font-semibold">Shop</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/dashboard/ adminHome">

                            </NavLink>
                            <FaPhoneAlt />
                            <span className="font-semibold">Contact</span>
                        </li>
                    </ul>
                </div>
                {/* Main Content */}
                <section className="bg-gray-100 w-4/5 p-8">
                   <Outlet></Outlet>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
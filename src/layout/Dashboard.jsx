import { FaHome, FaPlus, FaList, FaClipboardList, FaUtensils, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [isAdmin] = useAdmin()
    // console.log(isAdmin)
    return (
        <div>
            <div className="flex min-h-screen">
                {/* Left Sidebar */}
                <div className="bg-dashboard-primary w-1/5 p-4">
                    <h1 className="text-xl font-bold mb-8">Bistro Boss Restaurant</h1>
                    <ul className="space-y-4 uppercase">
                        {isAdmin ? (
                            <>
                                <li className="flex items-center space-x-2">
                                    <NavLink
                                        className="flex items-center space-x-2"
                                        to="/dashboard/adminHome"
                                    >
                                        <FaHome />
                                        <span className="font-semibold">Admin Home</span>
                                    </NavLink>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <NavLink
                                        className="flex items-center space-x-2"
                                        to="/dashboard/addItem"
                                    >
                                        <FaPlus />
                                        <span className="font-semibold">Add Item</span>
                                    </NavLink>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <NavLink
                                        className="flex items-center space-x-2"
                                        to="/dashboard/manageBookings"
                                    >
                                        <FaClipboardList />
                                        <span className="font-semibold">Manage Bookings</span>
                                    </NavLink>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <NavLink
                                        className="flex items-center space-x-2"
                                        to="/dashboard/allUsers"
                                    >
                                        <FaList />
                                        <span className="font-semibold">All Users</span>
                                    </NavLink>
                                </li>
                            </>
                        ) : null}

                        {/* Shared nav section */}
                        <div className="divider"></div>

                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/">
                                <FaHome />
                                <span className="font-semibold">Home</span>
                            </NavLink>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/menu">
                                <FaUtensils />
                                <span className="font-semibold">Menu</span>
                            </NavLink>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/shop">
                                <FaShoppingCart />
                                <span className="font-semibold">Shop</span>
                            </NavLink>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink className="flex items-center space-x-2" to="/contact">
                                <FaPhoneAlt />
                                <span className="font-semibold">Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* Main Content */}
                <section className="bg-gray-100 w-4/5 p-8">
                    <Outlet />
                </section>
            </div>
        </div>

    );
};

export default Dashboard;
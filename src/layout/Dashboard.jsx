import { FaHome, FaPlus, FaList, FaClipboardList, FaUtensils, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const Dashboard = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              refetch();
                    }
                })
            }
          });
    }
    return (
        <div>
            <div className="flex min-h-screen">
                {/* Left Sidebar */}
                <div className="bg-dashboard-primary   w-1/5 p-4">
                    <h1 className="text-xl font-bold mb-8">Bistro Boss Restaurant</h1>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <FaHome />
                            <Link to='/' className="font-semibold">User Home</Link>
                            
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaPlus />
                            <span className="font-semibold">Add Item</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaClipboardList />
                            <span className="font-semibold">Manage Items</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaList />
                            <span className="font-semibold">All Items</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaUtensils />
                            <span className="font-semibold">Menu</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaShoppingCart />
                            <span className="font-semibold">Shop</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaPhoneAlt />
                            <span className="font-semibold">Contact</span>
                        </li>
                    </ul>
                </div>
                {/* Main Content */}
                <div className="bg-gray-100 w-4/5 p-8">
                    <h1 className="text-center text-2xl font-bold mb-4 text-dashboard-primary">MANAGE ALL ITEMS</h1>
                    <div className="flex justify-around">
                        <h2 className="text-center text-lg mb-8 ">Total Items: {cart?.length}</h2>
                        <p>Total Price: {totalPrice}</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md  pb-6">
                        <table className="table-auto w-full ">
                            <thead className="">
                                <tr className="bg-dashboard-primary uppercase   rounded-md">
                                    <th className="py-2 px-4 text-left"></th>
                                    <th className="py-2 px-4 text-left">Item Image</th>
                                    <th className="py-2 px-4 text-left">Item Name</th>
                                    <th className="py-2 px-4 text-left">Price</th>
                                    <th className="py-2 px-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-100">
                                        <td className="py-2 px-4">{idx + 1}</td>
                                        <td className="py-2 px-4">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                                        </td>
                                        <td className="py-2 px-4">{item.name}</td>
                                        <td className="py-2 px-4">${item.price}</td>
                                        <td className="py-2 px-4">
                                            <button className="btn btn-sm btn-outline btn-success mr-2">
                                                <FaEdit />
                                            </button>
                                            <button onClick={()=>handleDelete(item._id)} className="btn btn-sm btn-outline btn-error">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
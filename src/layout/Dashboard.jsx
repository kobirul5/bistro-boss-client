import { FaHome, FaPlus, FaList, FaClipboardList, FaUtensils, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const items = [
        { id: 1, name: 'Roast Duck Breast', price: '$14.5', image: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Tuna Nyokke', price: '$14.5', image: 'https://via.placeholder.com/80' },
        { id: 3, name: 'Chicken and Wheat Salad', price: '$14.5', image: 'https://via.placeholder.com/80' },
        { id: 4, name: 'Fish Parmesan', price: '$14.5', image: 'https://via.placeholder.com/80' },
        { id: 5, name: 'Roasted Pork Belly', price: '$14.5', image: 'https://via.placeholder.com/80' },
    ];
    const [cart] = useCart()
    return (
        <div className="flex min-h-screen">
             {/* Left Sidebar */}
      <div className="bg-dashboard-primary text-white w-1/5 p-4">
        <h1 className="text-xl font-bold mb-8">Bistro Boss Restaurant</h1>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <FaHome />
            <span className="font-semibold">Dashboard</span>
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
                <h2 className="text-center text-lg mb-8 ">Total Items: {items.length}</h2>

                <div className="bg-white rounded-lg shadow-md  pb-6">
                    <table className="table-auto w-full ">
                        <thead className="rounded-md">
                            <tr className="bg-dashboard-primary text-white p-6 rounded-md">
                                <th className="py-2 px-4 text-left">Item Image</th>
                                <th className="py-2 px-4 text-left">Item Name</th>
                                <th className="py-2 px-4 text-left">Price</th>
                                <th className="py-2 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                                    </td>
                                    <td className="py-2 px-4">{item.name}</td>
                                    <td className="py-2 px-4">{item.price}</td>
                                    <td className="py-2 px-4">
                                        <button className="btn btn-sm btn-outline btn-success mr-2">
                                            <FaEdit  />
                                        </button>
                                        <button className="btn btn-sm btn-outline btn-error">
                                            <FaTrashAlt  />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
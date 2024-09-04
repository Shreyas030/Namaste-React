import { useState, useContext } from "react";
// import { LOGO_URL } from "../utils/constants";
import logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

import { FaCartShopping } from "react-icons/fa6";



const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // const { loggedInUser } = useContext(UserContext);

    //Subscribing to the store using a Selector
    const totalCartItems = useSelector((store) => store.cart.totalItems);
    // console.log(totalCartItems);



    return (
        <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 shadow-md">
            {/* Logo Section */}
            <div>
                <img className="w-28 h-auto" src={logo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div>
                <ul className="flex items-center space-x-6 text-lg font-medium">
                    {/* Online Status */}
                    <li className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                        <span className="font-medium text-gray-700">Online Status:</span>
                        <span className={`text-lg ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
                            {onlineStatus ? "🟢" : "🔴"}
                        </span>
                    </li>

                    {/* Navigation Links */}
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 ease-in-out">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 ease-in-out">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 ease-in-out">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 ease-in-out">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 ease-in-out">
                            <div className="flex justify-center items-center">
                                <div>
                                    <FaCartShopping className="w-8" />
                                </div>
                                {totalCartItems}
                            </div>
                        </Link>
                    </li>

                    {/* Login/Logout Button */}
                    <li>
                        <button
                            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold py-2 px-4 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => {
                                setBtnName(btnName === "Login" ? "Logout" : "Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                    {/* <li className="text-gray-800 hover:text-orange-600 transition-colors duration-300 ease-in-out">
                        {loggedInUser}
                    </li> */}
                </ul>
            </div>
        </div>
    );
}
export default Header;
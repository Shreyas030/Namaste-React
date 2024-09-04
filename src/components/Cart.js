import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { useState, useEffect } from "react";
import emptyCart from "../Images/emptyCart.png";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const TotalCartItems = useSelector((store) => store.cart.totalItems);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = cartItems.reduce((acc, item) => {
                return acc + (item?.card?.info?.price ?? item?.card?.info?.defaultPrice) * item.quantity;
            }, 0);
            setTotalPrice(total / 100);
        };

        calculateTotalPrice();
    }, [cartItems]);

    return TotalCartItems === 0 ? (
        <div className=" flex items-center justify-center border-sky-200 border-solid w-full">
            <img className=" w-96" src={emptyCart}></img>
            <div></div>
        </div>)
        : (
            <div className="bg-white p-6 mt-2 max-w-3xl mx-auto shadow-md rounded-lg">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b pb-4">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </div>

                {/* Cart Items */}
                <div className="divide-y">
                    {cartItems?.map((item, index) => (
                        <CartList key={index} item={item} />
                    ))}
                </div>

                {/* Bill Details */}
                <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-2">Bill Details</h2>
                    <div className="flex justify-between text-gray-700">
                        <span>Item Total</span>
                        <span className="font-bold">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-2">
                        <span>Delivery Fee</span>
                        <span className="font-bold">₹{totalPrice > 0 ? 30 : 0}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-2">
                        <span>Platform Fee</span>
                        <span className="font-bold">₹6</span>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-2">
                        <span>GST and Restaurant Charges</span>
                        <span className="font-bold">₹55</span>
                    </div>
                    <div className="flex justify-between text-gray-900 font-semibold text-xl mt-4 border-t pt-2">
                        <span>Total</span>
                        <span>₹{totalPrice + (totalPrice > 0 ? 30 : 0) + 6 + 55}</span>
                    </div>
                </div>
            </div>
        );
};

export default Cart;

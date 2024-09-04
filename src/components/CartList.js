import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CartList = ({ item, index }) => {
    const { name, price, defaultPrice, imageId, description } = item?.card?.info;
    const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;
    const { isVeg } = item?.card?.info;
    const { quantity } = item;

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));

    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <div className="cart-list flex items-center justify-between border-b py-4">
            <img className="w-40 h-40 rounded-md object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} />

            <div className="item-name font-medium text-lg text-gray-800 w-1/3">
                {name}
            </div>
            <div className="item-quantity flex items-center space-x-4">
                <button
                    className="text-lg font-bold text-orange-600 border border-orange-600 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => handleRemoveItem(item)}
                >
                    -
                </button>
                <span className="text-lg font-semibold text-gray-800">{quantity}</span>
                <button
                    className="text-lg font-bold text-orange-600 border border-orange-600 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => handleAddItem(item)}
                >
                    +
                </button>
            </div>
            <div className="item-price text-lg font-semibold text-gray-800">
                ₹{(Math.floor(price / 100) || Math.floor(defaultPrice / 100)) * quantity}
            </div>
        </div>

    )


}
export default CartList;
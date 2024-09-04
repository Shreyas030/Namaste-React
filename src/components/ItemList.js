import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { HiStar } from "react-icons/hi";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { GrSquare } from "react-icons/gr";
import { GrSquare } from "react-icons/gr";

import { useSelector } from "react-redux";


const ItemList = ({ item, index }) => {
    // console.log(item);

    

    //!...................
    const dispatch = useDispatch();

    //subscribing to the redux store
    const cartItems = useSelector((store) => store.cart.items);

    // Finding the quantity of the item in the Redux store
    const cartItem = cartItems.find(cartItem => cartItem.card.info.id === item.card.info.id);
    const quantity = cartItem ? cartItem.quantity : 0;



    const handleAddItem = (item) => {
        dispatch(addItem(item));

    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }




    //...............................................................................

    const { name, price, defaultPrice, imageId, description } = item?.card?.info;
    const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;
    const { isVeg } = item?.card?.info;




    return (<div key={index} className="flex space-x-60 justify-between items-center border-b-2 border-gray-200 w-[900px] shadow-md" >
        <div className="left ml-2 mt-2 ">
            <div className="flex flex-col space-y-3 p-2">
                <div className="vegNonveg">
                    {isVeg === 1 ?
                        (
                            <span className="text-green-600 font-bold"><GrSquare className="text-green-500" /></span>
                        ) :
                        (
                            <span className="text-red-600 font-bold"><FaRegSquareCaretUp className="text-red-500" /></span>
                        )
                    }
                </div>
                <div className="nameAndRs flex flex-col">
                    <div className="title text-xl  font-medium">
                        {name}
                    </div>
                    <div className="price font-semibold">
                        ₹{price / 100 || defaultPrice / 100}
                    </div>
                </div>


                <div className="rating flex items-center gap-1 ">
                    <div><HiStar className="text-green-600" />
                    </div>
                    <div className="text-xs font-semibold ">{rating || 4.1}({ratingCountV2 || 0})</div>

                </div>
                <div className="description text-sm text-[#676a6d] font-semibold">
                    {description}
                </div>
            </div>

        </div>
        <div className="right m-4">
            <div className="image relative my-1 mx-3 w-40 h-40 flex items-center justify-center">
                <img className="w-40 h-40 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} />
                {
                    quantity === 0 ? (<button className=" absolute bottom-2 w-28  bg-white text-green-600 py-1 px-4 rounded-lg font-bold shadow-lg" onClick={() => handleAddItem(item)}>
                        ADD
                    </button>) :
                        (<div className="absolute bottom-2 w-28 flex items-center justify-center space-x-4 bg-white py-1 px-4 rounded-lg shadow-lg">
                            <button
                                className="text-xl font-bold text-green-600"
                                onClick={() => handleRemoveItem(item)}
                            >
                                -
                            </button>
                            <span className="text-lg font-bold text-gray-800">{quantity}</span>

                            <button
                                className="text-xl font-bold text-green-600 "
                                onClick={() => handleAddItem(item)}
                            >
                                +
                            </button>
                        </div>)
                }

            </div>
        </div>
    </div>

    );
}
export default ItemList;
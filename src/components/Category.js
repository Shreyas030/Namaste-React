import React from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import ItemList from "./ItemList";


const Category = ({ resData, isVisible, setShowIndex }) => {
    // console.log(resData);
    
    const { title } = resData?.card?.card;
    const { itemCards } = resData?.card?.card;

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="flex flex-col items-center">
            <div className="title font-bold mt-4 text-xl flex justify-between items-center w-[900px] px-4 py-2 bg-gray-50 rounded-lg shadow-md cursor-pointer" onClick={handleClick}>
                <h1 className="text-xl text-gray-800">{title}</h1>
                <button className="text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out">
                    {isVisible ? (
                        <FaChevronCircleUp className="text-2xl" />
                    ) : (
                        <FaChevronCircleDown className="text-2xl" />
                    )}
                </button>
            </div>

            {isVisible && itemCards?.map((items, index) => (
                <ItemList
                    key={index}
                    item={items}
                />
            ))}
        </div>
    );
}

export default Category;

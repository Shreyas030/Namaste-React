import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Category from "./Category";

import { MdStars } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { useState } from "react";


const RestaurantMenu = () => {


    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    //Set show index which one to open
    const [showIndex, setShowIndex] = useState(null);
    
    // console.log(showIndex);



    if (resInfo === null) return (<Shimmer />);

    //here we have all the menu cards
    // console.log(resInfo);


    //!De structuring

    //Inside card[2] where we have info of restaurants the upper box
    const { name, cuisines, costForTwoMessage, avgRating, areaName, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

    const { minDeliveryTime, maxDeliveryTime } = resInfo?.cards[2]?.card?.card?.info.sla

    //info of menu (all cards are present inside regular)

    const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

    const category = cards?.filter((e) => e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(category);




    return (
        <div className="ml-1  main-continer ">
            <div className="mt-10 flex flex-col items-center">
                <div>
                    <div className="  ">
                        <div className="text-2xl font-bold"> {name} </div>
                    </div>
                </div>
                <div className="mx-2 my-5 px-3 py-5 flex flex-col border-gray-200 border-2 space-y-5 rounded-xl w-1/2 shadow-2xl">


                    <div className="ml-2">
                        <div className="rating text-md font-bold">
                            <div className="flex items-center gap-2 text-sm">
                                < MdStars className="text-green-600 " />
                                {avgRating} ({totalRatingsString}) - {costForTwoMessage}

                            </div>
                        </div>
                        <div className="mt-1 text-sm text-orange-600 font-bold underline">
                            <p> {cuisines.join(", ")} </p>
                        </div>
                        <div className="mt-1 text-md font-semibold border-b-2">
                            <div className="outlet mt-2">Outlet -  <span className="text-sm text-[#8d8d8d] font-normal">{areaName}</span>  </div>

                            <div className="mt-1 mb-2">{minDeliveryTime}-{maxDeliveryTime} mins</div>
                        </div>
                        <div className="mt-2 flex gap-2 items-center">
                            <div ><BiCycling className="text-[#8d8d8d]" /></div>
                            <div className="text-[#8d8d8d]">Order above 149 for discounted delivery fee</div>
                        </div>
                    </div>

                </div>



                <div className="AllTypes flex flex-wrap justify-center space-y-5 "> 
                    {
                        category?.map((item, index) => (
                            <Category
                                resData={item} key={index}
                                isVisible={index === showIndex ? true : false}
                                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                            />
                        ))
                    }
                </div>



            </div>

        </div>
    )
}
export default RestaurantMenu;

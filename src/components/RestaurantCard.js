import { CDN_URL } from "../utils/constants";
//Inserted in Body
const RestaurantCard = (props) => {

    //Here i am having all my top picks info one by one.
    // console.log(props);

    const { resData } = props;//Destructuring of props 
    // console.log(resData);

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;//Destructuring of resData

    const { deliveryTime } = resData?.info?.sla;//Destructuring of resData->info->sla

    return (
        <div className="m-4 p-4 w-64 max-h-[450px] rounded-lg bg-white shadow-lg hover:shadow-xl hover:bg-gray-100 transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col h-full">
                <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
                <div className="flex flex-col p-4 flex-grow">
                    <h3 className="font-bold text-xl text-gray-800 mb-2 truncate">{name}</h3>
                    <h4 className="text-orange-500 font-semibold">{avgRating} ⭐</h4>
                    <h4 className="text-gray-600 mb-2 truncate max-h-[3.6rem] overflow-hidden">{cuisines.join(", ")}</h4>
                </div>
            </div>
        </div>


    );
};
export default RestaurantCard;
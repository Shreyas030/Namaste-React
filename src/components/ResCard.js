import { CDN_URL } from "../utils/constants";
//Inserted in Body
const RestaurantCard = (props) => {
    // console.log(props);
    const { resData } = props;//Destructuring of props 
    // console.log(resData);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;//Destructuring of resData

    const { deliveryTime } = resData?.info?.sla;//Destructuring of resData->info->sla

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars </h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} minutes </h4>
        </div>
    );
};
export default RestaurantCard;
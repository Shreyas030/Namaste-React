import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    //Local State Variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [FilteredListOfRestaurants, setFilteredsetListOfRestaurants] = useState([]);
    const [topRatedRes, setTopRatedRes] = useState(false);

    // console.log(ListOfRestaurants);  


    useEffect(() => {
        // if(topRatedRes)
        // {

        fetchData();
        // }
    }, [])
    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);

        //Here i Have the top picks of city
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredsetListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>OFFILINE!!!!!!!!!!!!!!!</h1>
    }

    //to change while typing
    useEffect(() => {
        const filterRes = ListOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredsetListOfRestaurants(filterRes);
    }, [searchText, ListOfRestaurants]);
    //If topRatedRes is true it will give noraml res else it will give topRated
    const handleToggle = () => {
        if (topRatedRes) {
            setFilteredsetListOfRestaurants(ListOfRestaurants)
        }
        else {

            // Filter top rated Logic
            const filterdList = ListOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
            ).sort((a, b) => {
                return a.info.avgRating > b.info.avgRating ? -1 : 1;
            });
            setFilteredsetListOfRestaurants(filterdList);

        }
        setTopRatedRes(!topRatedRes);
    }


    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="border-2 border-solid  bg-white">

            <div className="bg-white flex justify-between items-center space-x-5 h-12 my-3 px-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg py-2 px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 w-full max-w-xs"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <button
                        className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:from-orange-500 hover:to-orange-600 transition duration-300 ease-in-out"
                        onClick={() => {
                            // Filter the ResCards and Update the UI   
                            const filterRes = ListOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredsetListOfRestaurants(filterRes);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="flex items-center">
                    <button
                        className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:from-orange-500 hover:to-orange-600 transition duration-300 ease-in-out"
                        onClick={handleToggle}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>



            <div className="flex flex-wrap justify-center align-middle ">
                {
                    FilteredListOfRestaurants.map((restaurant) =>
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}>

                            <RestaurantCard resData={restaurant} />
                        </Link>
                    )
                }
            </div>
        </div>
    );
};
export default Body;
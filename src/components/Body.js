import RestaurantCard from "./ResCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    //Local State Variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [FilteredListOfRestaurants, setFilteredsetListOfRestaurants] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7266016&lng=74.8570259&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredsetListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>OFFILINE!!!!!!!!!!!!!!!</h1>
    }

    //Normal JS Variable
    // let ListOfRestaurants = [ ]
    // console.log(ListOfRestaurants);

    // if (!ListOfRestaurants) {
    //     console.log("I created it beacuse it is showing error if List Of res is empty or maybe undefined");
    // }
    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }
                    } />
                    <button onClick={() => {
                        //Filter the ResCards and Update the UI   
                        const filterRes = ListOfRestaurants.filter((res) =>

                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredsetListOfRestaurants(filterRes);

                    }
                    }>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    //Filter Logic
                    const filterdList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4.4
                    );
                    setFilteredsetListOfRestaurants(filterdList);
                }
                }>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
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
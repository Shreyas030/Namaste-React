import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    //fetch data
    useEffect(() => {
        fetchData();
    }, []);
    

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        //Named Export 

        const json = await data.json();
        setResInfo(json.data);

        // console.log(json);
    };
    return resInfo;
}
export default useRestaurantMenu;


import { useState,useEffect } from "react";
import { restaurantMenuURL } from "../components/constants";

const useRestaurant = (resId)=>{
    const [restaurant,setRestaurant]= useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getMenuInfo();
    });

    async function getMenuInfo() {
        const data = await fetch(restaurantMenuURL + resId);
        const json = await data.json();
        //setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        //setMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setRestaurant(json?.data?.cards);
        setLoad(false);
    }
    return [restaurant,load];
}

export default useRestaurant; 
import { useState,useEffect } from "react";
import { restaurantImgURL} from "./constants.js";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";

function filterData(searchtext,restaurants){
  const filteredData= restaurants.filter((restaurant)=>
    restaurant.info.name.includes(searchtext)
  );
  return filteredData;
}

const RestaurantCard=({name,avgRating,locality,cloudinaryImageId})=>{
    
    return (
    <div 
        className="card"
    >
    <img 
        style={{
            height : "150px",
            width : "200px",
          
        }}
        src={restaurantImgURL + cloudinaryImageId} 
    />
    <h3>{name}</h3>
    <h3>{avgRating}</h3>
    <h3>{locality}</h3>

    </div>
)};

const Body = ()=>{
  
  //searchtext is a local state variable
  //every component in react maintains a state.
  //useState() is a hook. hook are js functions.
  //useState() hook returns a array, first element of that array is your variable and 
  //second one is a function.
  const [restaurants,setRestaurants] = useState([]);
  const [searchInput, setSearchInput]=useState(''); 
  const [fullResList , setFullResList]=useState([]);
  const online = useOnline();
  
  useEffect(()=>{
    //API CALL
    getRestaurants();
  },[searchInput]);
  
  
  async function getRestaurants(){
    try{
   //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true");
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const selectedData = await json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(json);

    setRestaurants(selectedData);
    setFullResList(selectedData);
    }catch(error){
      console.error("Error:",error);
    }
  } 

  if(!online) return <h1>Offline, please check your internet connection.</h1>;
  if(!restaurants) return null;
  if(filterData.length==0) 
    return <h1>no restaurants matched your search.</h1>;
    
  
  
  
  return ( restaurants.length==0 ) ? <Shimmer/> : (
    <>
    <div className="search-container">
    <input 
        type="text"
        id="search-field"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={(e)=>{
            setSearchInput(e.target.value);
        }}        
    />
    <button 
    className="search-btn"
    onClick={()=>{
      const data = filterData(searchInput,fullResList);
      setRestaurants(data);
    }}
    >
    Search</button>
    </div>

    <div 
    className="max-w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  "
    >
    {
    restaurants.map((restaurant)=>(
      <span className="border-2">
      <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
      <RestaurantCard {...restaurant.info} />
      </Link>
      </span>
    )
    )
    }
    </div>
    </>
  );
    
    
};

export default Body;
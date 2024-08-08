//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantImgURL } from "./constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams(); //that's how we read dynamic URL
  const [restaurant,load]=useRestaurant(resId);




  return load ? (
    <Shimmer />
  ) : (
    <div>
      <h1>url id : {resId}</h1>
      <h1>Restaurant id : {restaurant[2]?.card?.card?.info?.id}</h1>
      <h1>{restaurant[2]?.card?.card?.info?.name}</h1>

      <img
        src={
          restaurantImgURL + restaurant[2]?.card?.card?.info?.cloudinaryImageId
        }
      />

      <h1>Menu Items</h1>
      <div>
        <ul>
          <ul>
            {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ? (
              Object.values(restaurant[4].groupedCard.cardGroupMap.REGULAR.cards).map((foodCategory) => (
                <li>
                  <h2>
                    {foodCategory?.card?.card?.title}
                    <br />
                  </h2>
                  <h3>
                    {foodCategory?.card?.card?.itemCards ? (
                      foodCategory.card.card.itemCards.map((foodItem) => (
                        <li key={foodItem?.card?.info?.id}>
                          {foodItem?.card?.info?.name}
                        </li>
                      ))
                    ) : (
                      <li>No items</li>
                    )}
                    <br />
                  </h3>
                </li>
              ))
            ) : (
              <div>no items</div>
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;

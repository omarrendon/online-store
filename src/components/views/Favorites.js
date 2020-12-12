import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../actions/favoriteActions";

export const Favorites = () => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((product) => product.favorite);

  const handleDislike = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div>
      <div className="">
        {favorite.map((like) => (
          <div className="" key={like.id}>
            <div className="">
              <li>ID: {like.id}</li>
              <li>NAME:{like.name}</li>
              <li>PRICE: ${like.price}</li>
              <button onClick={() => handleDislike(like.id)}>Dislike</button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

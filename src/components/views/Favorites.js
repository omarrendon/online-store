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
      <div className="card card-favorite">
        {favorite.map((like) => (
          <div className="card-container" key={like.id}>
            <img src={like.image} className="card-image" />
            {/* <span>ID: {like.id}</span> */}
            <span>{like.name}</span>
            <span>PRICE: ${like.price}</span>
            <div className="card-box-button">
              <button
                className="card-button Favorite"
                onClick={() => handleDislike(like.id)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import {  FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsChef = ({ re }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleFavorite = () => {
    toast("I like it!");
    setIsLiked(true);
  };

  const {
    id,
    name,
    description,
    image,
    ingredients,
    rating,
    cooking_method,
    recipes,
  } = re;
  return (
    <div className="">
      <div className=" w-full bg-base-100  ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-full object-cover h-[50vh] " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <button
            onClick={handleFavorite}
            className={isLiked ? "btn-disabled" : "btn btn-primary"}
          >
            {" "}
            Like
          </button>
          <ToastContainer />
          <p><span className="text-2xl font-bold">Description:</span>{description}</p>
          <>
            <p><span className="text-2xl font-bold">Ingredients:</span>{ingredients}</p>
          </>
          <>
            <p><span className="text-2xl font-bold" >Cooking-Method:</span>{cooking_method}</p>
          </>
          <>
          
            <p><span className="text-2xl font-bold">Rating:</span><button>
            <Rating
          placeholderRating={rating}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar ></FaStar>}
          />{rating}</button></p>
          </>
        </div>
        
        
      </div>
    </div>
  );
};

export default DetailsChef;

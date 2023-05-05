import React, { useState } from "react";
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
          <p>Description:{description}</p>
          <>
            Ingredients:<p>{ingredients}</p>
          </>
          <>
            Cooking-Method:<p>{cooking_method}</p>
          </>
          <>
            Rating:<button>{rating}</button>
          </>
        </div>
        
        
      </div>
    </div>
  );
};

export default DetailsChef;

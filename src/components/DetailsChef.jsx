import React from "react";

const DetailsChef = ({ re }) => {
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
   <div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img w-96 h-96
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Description:{description}</p>
        <>Ingredients:<p>{ingredients}</p></>
        <>Cooking-Method:<p>{cooking_method}</p></>
        <>Rating:<p>{rating}</p></>
        
      </div>
    </div> 
   </div>
  );
};

export default DetailsChef;

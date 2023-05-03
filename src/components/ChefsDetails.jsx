import React from "react";
import { Link } from "react-router-dom";

const ChefsDetails = ({ data }) => {
  const { img,name,bio,experience,recipes,rating } = data;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96"
            src={img}
            alt="chefs"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <p>{experience}</p>
          <>Recipes:{
            recipes.map(recipe=> <p> {recipe.name}</p>)
          }</>
          
          <div className="card-actions justify-end">
            <Link to="/details"><button className="btn btn-primary">Views Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;

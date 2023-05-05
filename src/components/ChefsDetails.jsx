import React from "react";

import { Link } from "react-router-dom";


const ChefsDetails = ({ data }) => {
  const { id, img, name, bio, experience, recipes ,like} = data;
  return (
    <div className="max-w-[1240px] m-auto p-4 px-4 py-12 ">
      {/* display chefs */}
      <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
        <img
          className="w-full h-[200px] object-cover rounded-t-lg "
          src={img}
          alt=""
        />
        <div className="px-2 py-4">
          <p>
            <span className="text-xl font-bold">{name}</span>
          </p>
          <p>
            <span className="text-xl font-bold">Bio:</span>
            <span>{bio}</span>
          </p>
          <p>
            <span className="text-xl font-bold">Experience:</span>
            <span>{experience}</span>
          </p>
          <p><span className="text-xl font-bold">Like:</span>{like}</p>
          <>
            <span className="text-xl font-bold"> Recipes:</span>
            {recipes.map((recipe, index) => (
              <p key={index}>{recipe.name}</p>
            ))}
          </>
          
          <div>
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">Views Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;

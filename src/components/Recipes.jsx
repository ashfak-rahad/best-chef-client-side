import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailsChef from "./DetailsChef";

const Recipes = () => {
  const recipeAll = useLoaderData();
  console.log(recipeAll);
  const { id, img, recipes, name, bio, experience } = recipeAll;

  console.log(id, img, recipes);
  // const {id, name,description,image,ingredients,rating,cooking_method,recipes
  // }=recipeAll;
  return (
    <div>
      <section>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{bio}</p>
            <p>{experience}</p>
           
          </div>
        </div>
      </section>
      <section>
        <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {recipes &&
          recipes.map((re) => <DetailsChef key={id} re={re}></DetailsChef>)}
        </div>
        
      </section>
    </div>
  );
};

export default Recipes;

import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailsChef from "./DetailsChef";


const Recipes = () => {
  const recipeAll = useLoaderData();
  console.log(recipeAll);
  const { id, img, recipes, name, bio, experience } = recipeAll;

  console.log(id, img, recipes);
 
  return (
    <div>
      <section>
        <div className="lg:flex justify-center gap-3 items-center">
          <figure>
            <img src={img} alt="Movie" />
          </figure>
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>Bio:{bio}</p>
            <p className="text-2xl font-semibold">{experience}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {recipes &&
            recipes.map((re) => <DetailsChef key={id} re={re}></DetailsChef>)}
        </div>
      </section>
    </div>
  );
};

export default Recipes;

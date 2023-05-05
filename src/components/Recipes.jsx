import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailsChef from "./DetailsChef";

const Recipes = () => {
  const recipeAll = useLoaderData();
  console.log(recipeAll);
  const { id, img, recipes, like, name, bio, experience } = recipeAll;

  console.log(id, img, recipes);

  return (
    <div className="px-3">
      <section>
        <div className="lg:flex justify-center gap-3 items-center">
          <figure>
            <img className="w-full rounded-2xl" src={img} />
          </figure>
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>
              <span className="text-2xl font-semibold">Bio:</span>
              {bio}
            </p>
            <>
              <span className="text-2xl font-semibold"> Recipes:</span>
              {recipes.map((recipe, index) => (
                <p key={index}>{recipe.name}</p>
              ))}
            </>
            <p>
              <span className="text-2xl font-semibold">Likes:</span>
              {like}
            </p>
            <p>
              <span className="text-2xl font-semibold">Experience:</span>
              {experience}
            </p>
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

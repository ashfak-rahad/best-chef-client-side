import React, { useContext } from "react";

import { useApiData } from "../provider/AuthDataProvider";
import ChefsDetails from "./ChefsDetails";
import Recipes from "./Recipes";

const Chefs = () => {
  const { chefs } = useApiData();
  
  console.log(chefs);

  return (
    <div className="main  lg:gap-1 justify-items-center">
      <div className="col-span-2">
        <h1 className="text-center  py-7 text-2xl font-semibold">
          Our Best Chefs
        </h1>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
       {chefs.map((data) => (
          <ChefsDetails data={data} key={data.id}></ChefsDetails>
        ))}
       </div>
       {/* <div>
       {
            chefs.map().recipes.map(recipe=> <Recipes recipe={recipe}> </Recipes>)
          }
       </div> */}

      </div>
    </div>
  );
};

export default Chefs;

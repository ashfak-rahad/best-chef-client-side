import React, { useEffect, useState } from "react";
import BestFood from "./BestFood";
import Foods from "./Foods";
import Chefs from "./Chefs";

const Home = () => {
  const [load,setLoad]= useState();
  useEffect(()=>{
    fetch('')
  },[])
  
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              {" "}
              <span className="text-orange-500"> Japanese </span> Foods
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        <section>
            <BestFood></BestFood>
            <Foods></Foods>
            <Chefs></Chefs>
        </section>
      </div>
    </div>
  );
};

export default Home;

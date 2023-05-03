import React from "react";

const BestFood = () => {
  return (
    <div>
      <h1 className="text-center  py-7 text-2xl font-semibold">
        Our Popular Food{" "}
      </h1>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sushi</p>
            <p className="px-2">
              a dish made of vinegared rice combined with seafood, vegetables,
              or other ingredients.
            </p>
           
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/7245465/pexels-photo-7245465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Ramen </p>
            <p className="px-2">
              a noodle dish served in a hot broth with toppings such as sliced
              pork, eggs, and vegetables.
            </p>
           
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/6249717/pexels-photo-6249717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Tempura</p>
            <p className="px-2">
              {" "}
              a dish consisting of deep-fried seafood, vegetables, or other
              ingredients.
            </p>
           
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/6249491/pexels-photo-6249491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Yakitori</p>
            <p className="px-2">
              {" "}
               - skewered, grilled chicken that is marinated in a sweet and savory sauce.
            </p>
           
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/6249497/pexels-photo-6249497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Okonomiyaki </p>
            <p className="px-2">
              {" "}
              - a savory pancake made with flour, grated yam, and shredded cabbage, with various ingredients mixed in, such as pork, seafood, and vegetables.
            </p>
           
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/37352/food-japanese-asian.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Tonkatsu</p>
            <p className="px-2">
              {" "}
               - a breaded and deep-fried pork cutlet that is often served with a tangy tonkatsu sauce and shredded cabbage.
            </p>
           
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/8951498/pexels-photo-8951498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default BestFood;

import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  console.log(categories);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded p-4 flex justify-between items-center shadow-md"
          >
            <h2 className="font-bold text-base lg:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-16 ps-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

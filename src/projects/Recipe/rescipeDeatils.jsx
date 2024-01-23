import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RescipeDeatils({ searchResult }) {
  console.log(searchResult);
  const { index } = useParams();
  console.log(index);

  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (index) {
      setData(searchResult[index]);
    }
  }, []);

  console.log(data);

  useEffect(() => {
    if (data.recipe) {
      setIngredients(data.recipe.ingredients);
    }
  }, [data]);

  if (data.length == 0)
    return (
      <div className="text-gray-500 text-center text-2xl font-bold">
        No Result Found
      </div>
    );

  console.log(ingredients);

  return (
    <div>
      <div className="flex flex-col">
        <div className="recpiDetails flex gap-5 p-2 mb-5">
          <div className="rescipe-image w-[50vw] shadow-lg">
            <img
              className=" object-cover rounded-lg"
              src={data.recipe.image}
              alt="Card"
            />
          </div>

          {/* Recipe Details */}
          <div className="rescipe-details ml-4 p-2">
            <h2 className="text-2xl font-bold mb-2">{data.recipe.label}</h2>
            <h3 className="text-lg font-semibold mb-2 text-indigo-500">
              Health Lables
            </h3>
            <p className="text-gray-600 mb-3">
              {data.recipe.healthLabels.join(", ")}...
            </p>
          </div>
        </div>

        {/* Ingredients */}
        <div className="ingredients">
          <h3 className="text-2xl font-bold mb-4 ml-5">Ingredients</h3>
          <div className="items flex justify-between flex-wrap gap-3 p-2">
            {ingredients ? (
              ingredients.map((item, index) => {
                return (
                  <div key={index} className="bg-gray-200 rounded-md flex gap-3 w-[49%] p-2 my-auto">
                    <div className="w-[5rem]">
                      <img src={item.image} className="object-cover rounded-lg" alt={item.food}/>
                    </div>

                    <div className="item-details my-auto">
                      <h4 className="text-lg font-semibold">{item.food}</h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                      <p className="text-gray-600 text-sm"> Measure: {item.measure} , Quantity: {item.quantity}</p>
                    </div>
                  </div>
                );
              }) 
            ) : (
              <div className="text-gray-500 text-center mx-auto text-2xl font-bold">
                No Ingredients Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

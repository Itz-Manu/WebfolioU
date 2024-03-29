import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RescipeDeatils({ searchResult }) {
 
  const { index } = useParams();                            // This hook is used to get index from url (we used in codeandblog too) provided by react-router-dom
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (index) {
      setData(searchResult[index]);
    }
  }, []);

  //console.log(data);

  useEffect(() => {
    if (data.recipe) {
      setIngredients(data.recipe.ingredients);
    }
  }, [data]);

  if (data.length == 0)
    return (
      <div className="text-gray-500 text-center text-2xl font-bold">
        Search for something...
      </div>
    );

  return (
    <div className="flex flex-col">
    <div className="recpiDetails flex flex-col lg:flex-row gap-5 p-2 mb-5">
        <div className="rescipe-image w-full lg:w-[50vw] shadow-lg">
            <img
                className="object-cover rounded-lg w-full"
                src={data.recipe.image}
                alt="Card"
            />
        </div>

        {/* Recipe Details */}
        <div className="rescipe-details w-full lg:w-[50vw] ml-0 lg:ml-4 p-2">
            <h2 className="text-2xl font-bold mb-2">{data.recipe.label}</h2>
            <h3 className="text-lg font-semibold mb-2 text-indigo-500">
                Health Labels
            </h3>
            <p className="text-gray-600 mb-3">
                {data.recipe.healthLabels.join(", ")}...
            </p>
        </div>
    </div>

    {/* Ingredients */}
    <div className="ingredients">
        <h3 className="text-2xl font-bold mb-4 ml-5">Ingredients</h3>
        <div className="items flex flex-wrap justify-between gap-3 p-2">
            {ingredients ? (
                ingredients.map((item, index) => {
                    return (
                        <div key={index} className="bg-gray-200 rounded-md flex gap-3 w-full md:w-[49%] lg:w-[32%] p-2 my-2">
                            <div className="w-20 md:w-[5rem]">
                                <img src={item.image} className="object-cover rounded-lg w-full" alt={item.food}/>
                            </div>

                            <div className="item-details flex flex-col justify-center">
                                <h4 className="text-lg font-semibold">{item.food}</h4>
                                <p className="text-gray-600 text-sm mb-1">{item.text}</p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-medium">Measure:</span> {item.measure == null ? "NaN" : item.measure}, <span className="font-medium">Quantity:</span> {item.quantity}
                                </p>
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

  );
}

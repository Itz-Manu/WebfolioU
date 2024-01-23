import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recipes({ searchResult, result, handleToggle }) {
  //console.log(searchResult);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(searchResult);
  }, [searchResult]);

  //console.log(data);

  if (data.length == 0 && result)
    return (
      <div className="text-gray-500 text-center text-2xl font-bold">
        No Result Found
      </div>
    );

  if (data && !result)
    return (
      <div className="text-gray-500 text-center text-2xl font-bold">
        Search for something...
      </div>
    );

  function Description(desc) {
    const healthLabels = desc.join(", ");
    const words = healthLabels.split(" ");
    const displayText = words.slice(0, 20).join(" ");
    return displayText;
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div key={index} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[17vw] mb-5">
              <img
                className=" object-cover"
                src={item.recipe.image}
                alt="Card"
              />

              <div className="p-5">
                <h2 className="font-bold text-lg mb-2">
                  {item.recipe.label.split(" ").slice(0, 7).join(" ")}
                </h2>

                <p className="text-gray-600 mb-4">
                  {Description(item.recipe.ingredientLines)}...{" "}
                  <span>
                    <button className="text-indigo-400 cursor-pointer">
                      Read More
                    </button>
                  </span>
                </p>

                <Link to={`/rescepi/${index}`}>
                  <button onClick={handleToggle} className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// https://api.edamam.com/search?q=chicken&app_id=${ }&app_key=${ }&from=0&to=3&calories=591-722&health=alcohol-free

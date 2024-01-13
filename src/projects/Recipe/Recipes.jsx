import React, { useEffect, useState } from "react";

export default function Recipes({searchResult}) {
  //console.log(searchResult);
  const [data, setData] = useState([]);

  useEffect(() => { 
    setData(searchResult);
  }, [searchResult]);

  console.log(data);

  if(data.length === 0) return <div className="text-gray-500 text-center text-2xl font-bold">No Result Found</div>

  //if(data) return <div className="text-gray-500 text-center text-2xl font-bold">Search for something...</div>

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[15vw] h-[50vh] mb-5">
          <img className=" object-cover" src="cacke.jpeg" alt="Card" />

          <div className="p-5">
            <h2 className="font-bold text-xl mb-2">Oreo Cupcacke</h2>
            <p className="text-gray-600 mb-4">Just Dont't Eat it...</p>
            <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
              Know More
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[15vw] h-[50vh] mb-5">
          <img className=" object-cover" src="cacke.jpeg" alt="Card" />

          <div className="p-5">
            <h2 className="font-bold text-xl mb-2">Oreo Cupcacke</h2>
            <p className="text-gray-600 mb-4">Just Dont't Eat it...</p>
            <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
              Know More
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[15vw] h-[50vh] mb-5">
          <img className=" object-cover" src="cacke.jpeg" alt="Card" />

          <div className="p-5">
            <h2 className="font-bold text-xl mb-2">Oreo Cupcacke</h2>
            <p className="text-gray-600 mb-4">Just Dont't Eat it...</p>
            <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
              Know More
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[15vw] h-[50vh] mb-5">
          <img className=" object-cover" src="cacke.jpeg" alt="Card" />

          <div className="p-5">
            <h2 className="font-bold text-xl mb-2">Oreo Cupcacke</h2>
            <p className="text-gray-600 mb-4">Just Dont't Eat it...</p>
            <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
              Know More
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[15vw] h-[50vh] mb-5">
          <img className=" object-cover" src="cacke.jpeg" alt="Card" />

          <div className="p-5">
            <h2 className="font-bold text-xl mb-2">Oreo Cupcacke</h2>
            <p className="text-gray-600 mb-4">Just Dont't Eat it...</p>
            <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
              Know More
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[15vw] h-[50vh] mb-5">
          <img className=" object-cover" src="cacke.jpeg" alt="Card"/>

          <div className="p-5">
            <h2 className="font-bold text-xl mb-2">Oreo Cupcacke</h2>
            <p className="text-gray-600 mb-4">Just Dont't Eat it...</p>
            <button className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://api.edamam.com/search?q=chicken&app_id=${ }&app_key=${ }&from=0&to=3&calories=591-722&health=alcohol-free

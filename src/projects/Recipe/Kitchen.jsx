import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import Recipes from "./Recipes";
import customQuery from "./customQuery";
import { Link, Outlet } from "react-router-dom";
import RescipeDeatils from "./rescipeDeatils";
import BackButton from "../../components/BackButton";

export default function Kitchen() {
  const [search, setsearch] = useState("");
  const [result, setresult] = useState(false);
  const [toggle, setToggle] = useState(false);        // toggle rescepi card to rescepi details

  const inputRef = useRef();

  const handleclick = () => {                         // This function handle input from user
    const inputText = inputRef.current.value;
    setsearch(inputText);
    setresult(true);
  };

  const [data, error, loading] = customQuery(search);       // customQuery is a custom hook for API

  if (error) return <div>Something went wrong...</div>;

  function handleToggle() {                           // This function toggle betwwen rescepi card and rescepi details
    setToggle(!toggle);
  }

  return (
    <div>
      <div className="bg-gray-50 p-5">
        <Link to ="/rescepi">
          <div className="relative"><BackButton onClick={handleToggle}/></div>
        </Link>
        <h1 className="text-4xl font-bold text-center">Your Kitchen</h1>

        <div className="flex justify-center items-center space-x-2 mt-10 gap-3">
          <div className="bg-gray-100 flex w-[30vw] p-2 px-3 rounded-md">
            <div>
              <LuSearch size="1.5em" className="mt-1 mr-2" />
            </div>
            <input
              className="bg-gray-100 w-[30vw] px-3 rounded-md outline-none"
              type="text"
              ref={inputRef}
              placeholder="Enter food item..."
              onChange={handleclick}
            />
          </div>

          <button
            onClick={handleclick}
            className="bg-indigo-500 text-white px-5 py-2 font-bold rounded-md hover:bg-indigo-400"
          >
            Search
          </button>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center mt-10">
            Your Search Result
          </h1>
          <div className="bg-gray-100 p-5 m-3 rounded-lg">
            {toggle ? (
              <RescipeDeatils searchResult={data} />
            ) : (
              <Recipes searchResult={data} result={result} handleToggle={handleToggle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

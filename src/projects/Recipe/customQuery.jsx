import React, { useEffect, useState } from "react";
import axios from "axios";

export default function customQuery(search) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Race condition : In this condition we give the updated response to the user. For example, if user search for "pizza" and then "burger" then we will give the response of "burger" to the user.

  useEffect(() => {                                                 // You can use promises also  // for cancling the previous request we use the concept of debounce

    const controller = new AbortController();                       // it a function in axios which is used to get response in sequence  (Used for race condition)

    if (search.trim() !== '') {
        (async () => {
            // case for interview (if interviewer ask to "use async await in useEffect" or "run useEffect when response is received")
      
            try {
              setLoading(true);
              const res = await axios.get(
                `https://api.edamam.com/search?q=${search}&app_id=18a9f709&app_key=c44ee3ca64c0da195118d01e0921883d&from=0&to=3&calories=591-722&health=alcohol-free`,
                {
                  signal: controller.signal,                                  // it is used to manage the previous request.
                }
              );
              setData(res.data.hits);
              console.log(res);
              setLoading(false);
            } catch (error) {
              if (axios.isCancel(error)) {                                    // it is used to manage the controller.signal, controller cancel the previous request but it send an error. So, we have to handle that error.
                console.log("Request canceled", error.message);
                return;
              }
      
              setError(error);
              setLoading(true);
            }
          })();     // IIFE (Immediately Invoked Function Expression)
    }
    

    return () => {
      controller.abort();                                               // it is used to cleanup the controller
    };
  }, [search]);

  return [data, error, loading];
}

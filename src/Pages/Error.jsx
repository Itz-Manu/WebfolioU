import React from 'react'
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="flex flex-col items-center justify-center text-white min-h-screen">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl ">Please try again later.</p>
    </div>

  )
}

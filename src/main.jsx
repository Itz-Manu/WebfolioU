import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error.jsx";
import RescipeDeatils from "./projects/Recipe/rescipeDeatils.jsx";
import Recipes from "./projects/Recipe/Recipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/rescepi/:index",
        element: <RescipeDeatils />,
      },

      {
        path: "/rescepi",
        element: <Recipes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

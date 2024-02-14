import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
// import Error from "./Pages/Error.jsx";
// import RescipeDeatils from "./projects/Recipe/rescipeDeatils.jsx";
// import Recipes from "./projects/Recipe/Recipes.jsx";

import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Kitchen from "../projects/Recipe/Kitchen.jsx";
import TodoBasic from "../projects/ToDo-Basic/todo-basic.jsx";


const Router = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home/>} />
            <Route path="/Kitchen" element={<Kitchen />} />
            <Route path="/todo" element={<TodoBasic />} />
        </Route>
    )
)

export default Router;


































// export default Router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <Error />,
//       children: [
//         {
//           path: "/rescepi/:index",
//           element: <RescipeDeatils />,
//         },
  
//         {
//           path: "/rescepi",
//           element: <Recipes />,
//         },
//       ],
//     },
//   ]);


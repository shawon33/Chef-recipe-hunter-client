import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home";
import Login from "../LoginSite/Login";
import Register from "../LoginSite/Register";
import Error from "../Header/ErrorPage/Error";
import HealthTips from "../Home/ExtraSection/HealthTips";

import Blogs from "../Blogs/Blogs";
import RecipeInfo from "../Home/cheffile/Recipeinfo/Recipeinfo";
import Recipe from "../Home/cheffile/Recipeinfo/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'healthTips',
        element: <HealthTips></HealthTips>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/chef/:id',
        element: <Recipe></Recipe>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }

    ]
  },
]);
export default router;
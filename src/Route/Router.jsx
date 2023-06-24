import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home";
import Login from "../LoginSite/Login";
import Register from "../LoginSite/Register";
import Error from "../Header/ErrorPage/Error";
import HealthTips from "../Home/ExtraSection/HealthTips";

import Blogs from "../Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
           path:'healthTips',
           element:<HealthTips></HealthTips>
        },
        {
          path:'blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

 export const  router = createBrowserRouter([
     {
        path: '/',
        element:  <Main></Main>,
        children: [
             {
                 path: '/',
                 element: <Home></Home>
             },
             {
                path: '/login',
                element: <Login></Login>
             },
             {
               path: '/signup',
               element: <SignUp></SignUp>
             },
             {
               path: '/appointment',
               element: <Appointment></Appointment>
             }
        ]
     },
     {
      path: '/dashboard',
      element: <Dashboard></Dashboard>
     }
]);

export default router;
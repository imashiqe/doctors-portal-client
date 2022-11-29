import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";

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
      element:
       <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>,
      children: [
         {
           path: '/dashboard',
           element: <Dashboard></Dashboard>
         }
      ]
     }
]);

export default router;
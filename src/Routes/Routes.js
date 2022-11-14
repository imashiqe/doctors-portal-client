import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";

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
               path: '/appointment',
               element: <Appointment></Appointment>
             }
        ]
     }
]);

export default router;
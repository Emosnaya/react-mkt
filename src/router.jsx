import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";
import Recover from "./views/Recover";
import LoginAdm from "./views/LoginAdm";

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />

            },
            {
                path: '/dashboard',
                element: <Dashboard/>

            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path:  '/login',
                element: <Login/>
            },
            {
                path: '/singup',
                element: <Signup/>
            },
            {
                path: '/recover',
                element: <Recover/>
            },
            {
                path: '/Admin',
                element: <LoginAdm/>
            }
        ]
    },
    {
        path :'*',
        element: <NotFound/>
    }

])

export default router;
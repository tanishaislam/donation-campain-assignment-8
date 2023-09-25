import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../NavberMenuItem/Home/Home";
import Donation from "../NavberMenuItem/Donation/Donation";
import Statistics from "../NavberMenuItem/Statistics/Statistics";


const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/static',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default MyCreateRoute;
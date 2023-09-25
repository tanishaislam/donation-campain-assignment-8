import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../NavberMenuItem/Home/Home";
import Donation from "../NavberMenuItem/Donation/Donation";
import Statistics from "../NavberMenuItem/Statistics/Statistics";
import AddedCard from "../NavberMenuItem/AddedCard/AddedCard";


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
            },
            {
                path: "/card/:id",
                element: <AddedCard></AddedCard>,
                loader:()=> fetch('/card.json')
            }
        ]
    }
])

export default MyCreateRoute;
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

const MainLayout = () => {
    return (
        <div className="">
            <div>
            <Navber></Navber>
            </div>
            <div className="z-0">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;
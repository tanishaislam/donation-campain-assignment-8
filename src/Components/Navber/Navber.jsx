import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div className="">
            <nav className="flex lg:flex-row md:flex-row flex-col items-center justify-between container mx-auto">
                <div>
                    <img src="/src/assets/Logo.png" alt="" />
                </div>
                <ul className="flex gap-10 text-xl font-semibold">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Home
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Donation
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/static"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;
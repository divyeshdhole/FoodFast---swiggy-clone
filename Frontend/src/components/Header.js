import { LOGO_URL } from "../utils/constants";

import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState("login");
    return (
        <div className="px-10 flex justify-between shadow-lg bg-white-200 mb-2">
            <div className="w-[100px]">
                <img src={LOGO_URL} alt="Logo" />
            </div>

            <div className="items-center flex">
                {/* To desplay is online or offline */}
                {useOnlineStatus() ? <p className="online-status">Online</p> : <p className="online-status">Offline</p>}
                <Link className="px-2 m-3" to="/">Home</Link>
                <Link className="px-2 m-3" to="/about">About</Link>
                <Link className="px-2 m-3" to="#">Services</Link>
                <Link className="px-2 m-3" to="/contact">Contact</Link>
                <button className="px-2 m-3" onClick={() => {
                    btnName === "login" ? setbtnName("logout") : setbtnName("login")
                }}>{btnName}</button>

            </div>

        </div>
    );
};

export default Header;
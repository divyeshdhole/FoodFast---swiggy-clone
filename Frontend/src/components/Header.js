import { LOGO_URL } from "../utils/constants";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { RiQuestionLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";


import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState("login");
    return (
        <div className="px-10 flex justify-between shadow-lg bg-white-200 mb-2 font-poppins">
            <div className="w-[100px]">
                <img src={LOGO_URL} alt="Logo" />
            </div>

            <div className="items-center flex text-lg text-gray-700">
                {/* To desplay is online or offline */}
                {useOnlineStatus() ? <p className="online-status flex items-center gap-1"><MdOnlinePrediction />Online</p> : <p className="online-status flex items-center gap-1"><IoCloudOfflineOutline />Offline</p>}
                <Link className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" to="#"><IoBagOutline />FoodFast Corporate</Link>
                <Link className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" to="/"><FaHome />Home</Link>
                <Link className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" to="#">< IoSearch />Search</Link>
                <Link className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" to="/about"><RiQuestionLine />about</Link>
                <Link className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" to="#"><RiCustomerService2Fill />Services</Link>
                <Link className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" to="/contact"><IoIosContact />Contact</Link>
                <button className="px-2 m-3 flex items-center gap-1 hover:text-orange-400" onClick={() => {
                    btnName === "login" ? setbtnName("logout") : setbtnName("login")
                }}>{btnName === "login" ? <CiLogin /> : <CiLogout />} {btnName}</button>

            </div>

        </div>
    );
};

export default Header;
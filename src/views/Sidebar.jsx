import { FaHome, FaClinicMedical , FaBookMedical } from 'react-icons/fa';
import { RiMenu2Fill, RiMenu3Fill, RiLogoutBoxFill     } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <aside className={`h-auto fixed text-white lg:static w-[80%] sm:w-[40%] lg:w-full z-50 transition-all duration-300 ${showMenu ? "bottom-0" : "-bottom-full" } overflow-y-scroll no-scrollbar bg-black-dark`}>
            <div className=" p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll no-scrollbar flex flex-col justify-between gap-8 mt-10">
                <nav className="flex flex-col gap-8">
                    <a href="/dashboard" className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-purple-400 transition-colors cursor-pointer ">
                    <TbReportAnalytics /> Summary
                    </a>
                    <Link to={'/perfil/'} className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-purple-400 transition-colors cursor-pointer">
                    <IoAnalyticsOutline /> Creators Overview
                    </Link>
                    <a 
                        className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-purple-400 transition-colors cursor-pointer"
                    > <FaMedal /> Top Creators</a>
                    
                </nav>
            </div>
            
        </aside>
        <button 
            onClick={() => setShowMenu(!showMenu)} 
            className="fixed lg:hidden right-4 bottom-4 text-2xl p-2.5 rounded-full text-white z-50"
            >
            {showMenu ? <RiMenu3Fill/> : <RiMenu2Fill  />}
        </button>
        </>
      )
}

import { Navigate, Outlet } from "react-router-dom";



export default function GuestLayout() {

    return (
        <main className="flex justify-center items-center">
            <div className=" flex flex-col md:flex-row items-center md:justify-center md:gap-5 bg-black-dark lg:mt-28 rounded-lg mt-5">
                <img 
                src="../img/logo-4.png" 
                alt="imagen logotipo"
                className="w-[400px] md:w-[400px] md:h-auto mb-0"
                />
    
                <div className="p-10 max-w-full -mt-8">
                <Outlet />
                </div>
            </div>
                
        </main>
      )
}

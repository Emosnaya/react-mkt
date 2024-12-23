import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function LoginAdm() {
  return (
    <>
   
    <h1 className="text-5xl font-bold text-white mb-2">Login</h1>
        <p className='text-lg text-white mb-5'>Accede a tu cuenta como Empresa</p>
        <form action="" className="space-y-6 text-white">
                <div className="mb-4 relative">
                    <div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center'>
                      <IoMailOpenSharp />
                    </div>
                    <input 
                        type="email"
                        id="email"
                        placeholder='Email'
                        className="w-80 bg-white-light py-2 px-12 rounded-full outline-none border-2 hover:border-fuchsia-400 duration-200 peer focus:border-fuchsia-400 focus:bg-black custom-placeholder" 
                        name="email"
                        required
                    />
                </div>
                <div className="mb-4 relative">
                <div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center'>
                  <FaKey />
                    </div>
                    <input 
                        type="password"
                        id="password"
                        className="w-80 bg-white-light py-2 px-12 rounded-full outline-none border-2 hover:border-fuchsia-400 duration-200 peer focus:border-fuchsia-400 focus:bg-black custom-placeholder" 
                        name="password"
                        placeholder="Password"
                        required
                    />
                </div>

                <input 
                    type="submit" 
                    value="Iniciar Sesión"
                    className="bg-[#b3a2ce] hover:bg-purple-400 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
            </form>

        <nav className="mt-5 grid text-white"> 
            <Link to="/login" className='hover:text-purple-400'>
                ¿Eres Usuario? Inicia Sesión
            </Link>
        </nav>
  </>
  ) 
}

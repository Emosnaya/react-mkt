import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"

export default function Recover() {
  return (
    <>
        <h1 className="text-5xl font-bold text-white mb-8">Recupera tu Contraseña</h1>
        <form action="" className="space-y-6 text-white mt-2">
                <div className="mb-2 relative">
                    <div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center'>
                      <IoMailOpenSharp />
                    </div>
                    <input 
                        type="email"
                        id="email"
                        placeholder='Email'
                        className="w-full bg-white-light py-2 px-12 rounded-full outline-none border-2 hover:border-fuchsia-400 duration-200 peer focus:border-fuchsia-400 focus:bg-black custom-placeholder" 
                        name="email"
                        required
                    />
                </div>

                <input 
                    type="submit" 
                    value="Recuperar Password"
                    className="bg-[#b3a2ce] hover:bg-purple-400 text-white w-full mt-3  p-3 uppercase font-bold cursor-pointer"
                />
            </form>

        <nav className="mt-5 grid text-white"> 
            <Link to="/login" className='hover:text-purple-400'>
                ¿Tienes cuenta? Inicia sesión
            </Link>
            <Link to="/singup" className='hover:text-purple-400'>
                ¿No tienes cuenta? Crea una
            </Link>
        </nav>
    </>
  )
}

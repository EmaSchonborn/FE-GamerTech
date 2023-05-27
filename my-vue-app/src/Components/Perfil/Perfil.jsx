import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import userImage from "./imagen/imgPerfil.png";

//import { useNavigate } from "react-router-dom";

const ProfileUser = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  
  const userVerified = useSelector((state) => state.userVerified);
  
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-[#E60011] shadow p-2">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-4">
        <div className="w-40 h-50">
          <div className="w-full mb-8">
            <img
              className="object-cover w-50 h-full rounded-lg shadow-lg max-w-full"
              src={userImage}
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
            htmlFor="grid-experiencia"
          >
            Informacion:
          </label>
          <div className="bg-[#E60011] overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-white">
                Mis Compras:
              </h2>
            </div>
          </div>
          <br />
          <br />
          <div className="bg-[#E60011] overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-white">
                Informacion Financiera:
              </h2>
              <br />
              <button>Editar</button>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 mt-2">
          </div>
          <br />
          <div className="bg-[#E60011] overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-white">
                Informacion de Contacto:
              </h2>
              <br />
              <button>Editar</button>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 mt-2">
            <div className="md:w-full px-3">
              <ul className="p-7 rounded-md list-disc bg-green-100">
              Sesion iniciada:
                <li className="mb-2 text-slate-950"> 
                  {userVerified.user?.name}
                </li>
                <li className="mb-2 text-slate-950">
                  {userVerified.user?.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
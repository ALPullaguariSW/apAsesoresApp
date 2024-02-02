import React, { useState } from "react";
import logo from "../assets/Leon AP.svg";
import "./Base.css";
import LoginForm from "./LoginForm";

function Base() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
    LoginForm();
  };

  return (
    <header className="p-6 text-md shadow-md">
      <nav className="flex justify-around items-center ">
        <a href="" className="">
          <img src={logo} class="w-20" alt="" />
        </a>

        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-azul-ap"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div className="hidden md:flex font-bold text-lg items-center justify-around ">
          <ul className="flex space-x-6 justify-between items-center w-auto ">
            <li>
              <a
                href="#"
                class="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap "
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap "
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#sn"
                class="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap "
              >
                Servicios
              </a>
            </li>
            <li>
              <a class="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap ">
                Contactos
              </a>
            </li>
          </ul>
        </div>
        <button
          className="bg-azul-ap hidden md:flex p-4 h-12 rounded text-white items-center hover:bg-sol-ap"
          onClick={handleLoginClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          LOGIN
        </button>
      </nav>

      {showLoginForm && (
        <div className="fixed top-0 z-10 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <LoginForm />
          {/* Your login form component goes here */}
        </div>
      )}
    </header>
  );
}

export default Base;

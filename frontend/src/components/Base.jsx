import React from "react";
import logo from "../assets/Leon AP.svg";
import "./Base.css";
function Base() {
  return (
    <header class="animate-fade-down animate-once animate-duration-1000 sticky top-0 bg-white z-10 max-w-screen-full">
      <nav class="p-4 flex flex-wrap items-center justify-around">
        <a href="" class="items-center">
          <img src={logo} class="w-24" alt="" />
        </a>

        <div class=" w-full md:w-auto" id="navbar-default">
          <ul class="flex flex-col font-semibold p-4 md:p-0 mt-4 border md:flex-row md:space-x-14 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-sol-ap rounded md:bg-transparent hover:text-azul-ap"
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="
                 py-2 pl-3 pr-4 text-sol-ap rounded md:bg-transparent hover:text-azul-ap"
              >
                SOBRE NOSOTROS
              </a>
            </li>
            <li>
              <a
                href="#sn"
                class="block py-2 pl-3 pr-4 text-sol-ap rounded md:bg-transparent hover:text-azul-ap"
              >
                SERVICIOS
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-sol-ap rounded md:bg-transparent hover:text-azul-ap"
              >
                CONTACTOS
              </a>
            </li>
            <li className="container mx-auto">
              <div className="flex items-center gap-x-1">
                <button
                  type="button"
                  class="text-white bg-azul-ap border-0 py-1 px-6 focus:outline-none hover:bg-sol-ap rounded text-lg"
                >
                  Log in
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Base;

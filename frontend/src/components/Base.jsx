import React from "react";
import logo from "../assets/Leon AP.svg";
import "./Base.css";

function Base() {
  return (
    <header class="p-6 text-md">
      <nav class="md:flex justify-around items-center">
        <div class="flex justify-around">
          <a href="" class="">
            <img src={logo} class="w-20" alt="" />
          </a>
          <button class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-azul-ap"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        <div class="hidden md:flex w-3/5 items-center justify-around   ">
          <ul class="flex w-2/3 justify-between">
            <li>
              <a
                href="#"
                class="text-sol-ap rounded hover:drop-shadow-xl hover:text-azul-ap"
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" class=" text-sol-ap rounded hover:text-azul-ap">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#sn" class=" text-sol-ap rounded hover:text-azul-ap">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" class=" text-sol-ap rounded  hover:text-azul-ap">
                Contactos
              </a>
            </li>
          </ul>
          <button class="bg-azul-ap flex w-28 justify-between px-4 py-2 rounded text-white items-center hover:bg-sol-ap">
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
        </div>
      </nav>
    </header>
  );
}
export default Base;

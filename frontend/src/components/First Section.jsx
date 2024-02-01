import React from "react";
import bgFamily from "../assets/1.jpg";

import "./First Section.css";
function FirstSection() {
  return (
    <section class="p-6 flex  justify-around items-center">
      <img class="w-1/4" src={bgFamily} alt={"fondoFamilia"} />
      <div class="text-azul-ap ">
        <div class="text-xl font-bold sm:text-3xl md:text-4xl sm:font-semibold">
          <p class="">ASESORES DE SEGUROS</p>
          <p class="font-thin sm:font-normal text-base sm:text-xl">
            "FORTALEZA QUE INSPIRA"
          </p>
        </div>
        <div class="w-fit text-center space-y-3">
          <h1 class="font-thin sm:font-normal md:font-semibold center">
            Asesoria gratuita
          </h1>
          <button class="bg-azul-ap flex w-32 -scale-2 justify-between px-4 py-2 rounded text-white items-center hover:bg-sol-ap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}
export default FirstSection;

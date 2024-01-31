import React from "react";
import bgFamily from "../assets/1.jpg";
import whatsappSvg from "../assets/whatsapp.svg";
import "./First Section.css";
function FirstSection() {
  return (
    <section class="flex h-200 sm:h-300 md:h-400 xl:h-600 items-center">
      <img
        class="-z-50 animate-fade animate-duration-[2000ms] animate-ease-in-out"
        src={bgFamily}
        alt={"fondoFamilia"}
      />

      <div class="text-azul-ap pl-10 sm:pl-20 md:pl-26 lg:pl-44 xl:pl-56 absolute animate-fade-right animate-duration-1000 space-y-2 sm:space-y-16 lg:space-y-32">
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
          <button class="bg-white flex justify-center items-center space-x-2 hover:animate-jump hover:ring-4 hover:ring-sol-ap hover:animate-duration-[300ms] hover:animate-ease-linear hover:bg-white text-azul-ap font-semibold hover:text-azul-ap py-1 px-2 md:py-2 md:px-4 border-4 border-transparent rounded-3xl">
            <img class="w-8" src={whatsappSvg} alt="whatsappSvg" />
            <h1>Contáctanos</h1>
          </button>
        </div>
      </div>
    </section>
  );
}
export default FirstSection;

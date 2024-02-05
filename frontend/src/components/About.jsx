import React from "react";
import roundedLogo from "../assets/rLogo.svg";
import "./CSS/About.css";
function About() {
  return (
    <section id="sn" class="p-6 bg-black flex justify-center  bg-opacity-5">
      <div class="flex md:flex-row w-5/6  flex-col items-center justify-around  text-azul-ap ">
        <div class="flex flex-wrap   w-10/12 lg:w-1/2 text-lg ">
          <h2 class="font-semibold  ">SOBRE NOSOTROS</h2>
          <p className="">
            En A&P Asesores, nuestra misión es proporcionar asesoría experta y
            soluciones de seguros personalizadas para proteger los activos y la
            tranquilidad de nuestros clientes. La responsabilidad y la
            transparencia son los principios que guían cada interacción.
          </p>
          <p class="">
            Nos comprometemos a proteger lo que más valoras y te acompañamos en
            cada decisión importante. Confiar en nosotros te proporciona
            tranquilidad y seguridad en un mundo en constante cambio.
          </p>
        </div>
        <div class="p-6 ">
          <img class="w-full" src={roundedLogo} alt="Rounded Logo" />
        </div>
      </div>
    </section>
  );
}
export default About;

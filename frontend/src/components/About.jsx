import React from "react";
import roundedLogo from "../assets/rLogo.svg";
import "./CSS/About.css";
function About() {
  return (
    <section
      id="sn"
      class="p-6  flex justify-center bg-black bg-opacity-5 items-center"
    >
      <div class="flex flex-col md:flex-row    justify-around items-center space-x-32">
        <div class="  text-azul-ap max-w-xl text-md">
          <h2 class="font-semibold ">SOBRE NOSOTROS</h2>

          <p>
            En A&P Asesores, nuestra misión es proporcionar asesoría experta y
            soluciones de seguros personalizadas para proteger los activos y la
            tranquilidad de nuestros clientes. La responsabilidad y la
            transparencia son los principios que guían cada interacción.
          </p>
          <p>
            Nos comprometemos a proteger lo que más valoras y te acompañamos en
            cada decisión importante. Confiar en nosotros te proporciona
            tranquilidad y seguridad en un mundo en constante cambio.
          </p>
        </div>
        <div class="">
          <img class="w-full" src={roundedLogo} alt="Rounded Logo" />
        </div>
      </div>
    </section>
  );
}
export default About;

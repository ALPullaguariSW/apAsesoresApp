import React from "react";
import roundedLogo from "../assets/rLogo.svg";
import "./About.css";
function About() {
  return (
    <section id="sn" class="bg-white flex items-center justify-center">
      <div class="flex flex-col space-y-5 items-center lg:space-x-28 lg:flex-row p-14 md:p-32">
        <div class="text-azul-ap max-w-md md:max-w-lg text-md lg:text-xl">
          <h2 class="mb-4 text-4xl tracking-tight font-semibold">
            SOBRE NOSOTROS
          </h2>
          <div class="max-w-lg">
            <p class="mb-4">
              En A&P Asesores, nuestra misión es proporcionar asesoría experta y
              soluciones de seguros personalizadas para proteger los activos y
              la tranquilidad de nuestros clientes. La responsabilidad y la
              transparencia son los principios que guían cada interacción.
            </p>
            <p>
              Nos comprometemos a proteger lo que más valoras y te acompañamos
              en cada decisión importante. Confiar en nosotros te proporciona
              tranquilidad y seguridad en un mundo en constante cambio.
            </p>
          </div>
        </div>

        <div class="">
          <img
            class="animate-ping animate-once animate-duration-500 animate-delay-500 animate-ease-linear animate-reverse h-200 md:h-400 drop-shadow-xl lg:drop-shadow-3xl"
            src={roundedLogo}
            alt="Rounded Logo"
          />
        </div>
      </div>
    </section>
  );
}
export default About;

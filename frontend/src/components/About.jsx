import React from "react";
import roundedLogo from "../assets/rLogo.svg";
import "./About.css";
function About() {
  return (
    <section id="sn" class="p-6">
      <div class="flex justify-around items-center">
        <div class="flex flex-col  text-azul-ap  w-600">
          <h2 class=" tracking-tight font-semibold">SOBRE NOSOTROS</h2>
          
            <p class="flex-wrap ">
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
        <img
          class="animate-ping max-h-72 animate-once animate-duration-500 animate-delay-500 animate-ease-linear animate-reverse"
          src={roundedLogo}
          alt="Rounded Logo"
        />
      </div>
    </section>
  );
}
export default About;

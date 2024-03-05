import React from "react";
import Error404img from "../../../assets/404Error.svg";
import "../../CSS/Tailwind.css";
import Footer from "../MainPage/Footer.jsx";
function Error404() {
  const handleClick = () => {
    // Redirige al usuario a la página principal
    window.location.href = "/";
  };
  return (
    <React.StrictMode>
      <section class="p-4 bg-black flex justify-center  bg-opacity-5">
        <div class="flex md:flex-row w-5/6  flex-col items-center justify-around  text-azul-ap">
          <div class="flex flex-wrap p-12  w-10/12 lg:w-1/2 text-md">
            <h1 class="text-xl font-bold sm:text-3xl md:text-4xl sm:font-semibold">
              Parece que has encontrado la puerta a la gran nada
            </h1>
            <p class="text-azul-ap">
              Lamentamos lo ocurrido! Por favor visita nuestra página para
              encontrar lo que necesitas.
            </p>
            <button
              onClick={handleClick}
              class="bg-azul-ap text-white font-semibold hover:text-azul-ap hover:bg-sol-ap py-1 px-2 md:py-2 md:px-4 border-4 border-transparent rounded-3xl"
            >
              Click aquí!
            </button>
          </div>
          <div className="">
            <img src={Error404img} className="w-800" />
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
}
export default Error404;

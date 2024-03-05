import React, { useState } from "react";
import Footer from "../MainPage/Footer.jsx";
import "../../CSS/Tailwind.css";

function Cotizador() {
  const [tipoSeguro, setTipoSeguro] = useState("auto");

  const handleChangeTipoSeguro = (event) => {
    setTipoSeguro(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para manejar la cotización del seguro
  };
  return (
    <React.StrictMode>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow-md p-4 flex justify-center">
          <button
            onClick={() => setTipoSeguro("auto")}
            className={`mx-2 px-4 py-2 rounded ${
              tipoSeguro === "auto" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            Seguro de Auto
          </button>
          <button
            onClick={() => setTipoSeguro("vida")}
            className={`mx-2 px-4 py-2 rounded ${
              tipoSeguro === "vida" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            Seguro de Vida
          </button>
          <button
            onClick={() => setTipoSeguro("hogar")}
            className={`mx-2 px-4 py-2 rounded ${
              tipoSeguro === "hogar" ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            Seguro de Hogar
          </button>
        </nav>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Cotizador de Seguros</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            {tipoSeguro === "auto" && (
              <div className="mb-4">
                <label htmlFor="marca" className="block text-sm font-bold mb-2">
                  Marca del Vehículo
                </label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Ingrese la marca del vehículo"
                />
              </div>
            )}
            {tipoSeguro === "vida" && (
              <div className="mb-4">
                <label
                  htmlFor="edadAsegurado"
                  className="block text-sm font-bold mb-2"
                >
                  Edad del Asegurado
                </label>
                <input
                  type="number"
                  id="edadAsegurado"
                  name="edadAsegurado"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Ingrese la edad del asegurado"
                />
              </div>
            )}
            {tipoSeguro === "hogar" && (
              <div className="mb-4">
                <label
                  htmlFor="metrosCuadrados"
                  className="block text-sm font-bold mb-2"
                >
                  Metros Cuadrados de la Vivienda
                </label>
                <input
                  type="number"
                  id="metrosCuadrados"
                  name="metrosCuadrados"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Ingrese los metros cuadrados de la vivienda"
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-azul-ap text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300"
            >
              Cotizar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </React.StrictMode>
  );
}

export default Cotizador;

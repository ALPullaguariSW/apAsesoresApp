import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto"; // Importa Chart.js
import logo from "../../../assets/rFooter.svg";
import "../../CSS/Tailwind.css";

function Dashboard() {
  const handleLogout = () => {
    // Redirige al usuario a la página principal
    window.location.href = "/";
  };

  // Referencia para el canvas de los gráficos
  const chartRef = useRef();

  useEffect(() => {
    // Datos de ejemplo para los gráficos
    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          label: "Ventas",
          data: [100, 200, 150, 300, 250, 400],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Ingresos",
          data: [5000, 6000, 5500, 7000, 6500, 8000],
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
        },
      ],
    };

    // Opciones de configuración para los gráficos
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Crea los gráficos
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: data,
      options: options,
    });

    // Limpia el gráfico cuando el componente se desmonta
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="bg-azul-ap text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto">
        <div className="p-6">
          <img src={logo} className="w-24" alt="Logo" />
          <h1 className="text-2xl font-bold">Gestión de pólizas</h1>
          <p className="text-sm mt-2">Bienvenido a A&P Asesores System</p>
        </div>
        <ul className="mt-8">
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-4 hover:bg-blue-800 transition duration-300"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="block py-2 px-4 hover:bg-blue-800 transition duration-300"
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="block py-2 px-4 hover:bg-blue-800 transition duration-300"
            >
              Configuración
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <button
          onClick={handleLogout}
          className="bg-azul-ap text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300 absolute top-6 right-6"
        >
          Cerrar Sesión
        </button>
        <h2 className="text-3xl font-bold mb-4">Resumen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Usuarios</h3>
            <p className="text-2xl font-bold">1200</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Ventas</h3>
            <p className="text-2xl font-bold">$50,000</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Productos</h3>
            <p className="text-2xl font-bold">300</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Ingresos</h3>
            <p className="text-2xl font-bold">$80,000</p>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Gráficos</h2>
          {/* Gráfico de Ventas */}
          <canvas ref={chartRef} id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

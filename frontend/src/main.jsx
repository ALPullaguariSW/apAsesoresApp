import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Pages/MainPage/Main.jsx";
import Error from "./components/Pages/Error404Page/404.jsx";
import Dashboard from "./components/Pages/DashboardPage/dashboard.jsx";
import Cotizador from "./components/Pages/FormPage/cotizador.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cotizador" element={<Cotizador />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

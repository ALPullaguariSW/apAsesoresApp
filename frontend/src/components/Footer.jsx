import React from "react";
import logo from "../assets/rFooter.svg";

import "./Footer.css";
function Footer() {
  return (
    <footer class="text-white bg-azul-ap">
      <div class="p-10 ">
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-around">
          <a href="" class="">
            <img src={logo} class="w-40" alt="" />
          </a>

          <ul class="flex flex-row space-x-10 lg:space-x-24 font-semibold">
            <li>
              <a href="#" class="hover:text-sol-ap">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-sol-ap">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-sol-ap">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-sol-ap">
                Contact
              </a>
            </li>
          </ul>

          <ul class="flex flex-wrap space-x-11 xl:space-x-0 md:flex-col">
            <li class="font-semibold">Contactos:</li>
            <div class="flex flex-row">
              <ul>
                <li>
                  <a href="#" class="hover:text-sol-ap">
                    +593 998 287 277
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-sol-ap">
                    +593 969 093 116
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        <hr class="border-azul-ap" />
        <div class="flex flex-wrap justify-center">
          © 2023{" "}
          <a href="" class="hover:text-sol-ap px-2">
            A&P ASESORES
          </a>
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
export default Footer;

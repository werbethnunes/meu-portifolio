import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoimg.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </Link>
      </div>
      <nav className="ml-4">
        <ul className="flex space-x-8"> 
          <li>
            <Link to="/" className="hover:text-gray-300 font-bold">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 font-bold">Projetos</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 font-bold">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="flex flex-col items-center">
        <p className="mb-4">© 2024 Werbeth Nunes. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/werbethnunes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/werbethnuness/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://wa.me/559896090208"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

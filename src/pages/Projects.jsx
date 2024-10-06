import React from 'react'; 
import ecohouseImg from '../assets/ecohouseimg.svg';
import oceanCareImg from '../assets/oceancareimg.svg';

const Projects = () => {
  return (
    <section className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-[#1b7e99] text-center">Meus Projetos</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105">
          <img 
            src={ecohouseImg} 
            alt="EcoHouse - CP de Front End (FIAP)" 
            className="w-full max-w-md h-auto rounded-lg mb-4 mx-auto" 
          />
          <h2 className="text-2xl font-semibold text-[#333]">EcoHouse - CP de Front End (FIAP)</h2>
          <p className="mt-2 text-gray-700">
            Projeto de front end focado em produtos sustentáveis, desenvolvido para a CP de Front End na FIAP.
          </p>
          <div className="mt-4 flex space-x-4">
            <a 
              href="https://github.com/werbethnunes/4CP-Front-End-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1b7e99] text-white py-2 px-4 rounded-lg hover:bg-[#167e88] transition duration-200"
            >
              Repositório no GitHub
            </a>
            <a 
              href="https://4-cp-front-end.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1b7e99] text-white py-2 px-4 rounded-lg hover:bg-[#167e88] transition duration-200"
            >
              Ver Demo
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105">
          <img 
            src={oceanCareImg} 
            alt="Sistema de Monitoramento de Corais - OceanCare" 
            className="w-full max-w-md h-auto rounded-lg mb-4 mx-auto" 
          />
          <h2 className="text-2xl font-semibold text-[#333]">Sistema de Monitoramento de Corais - OceanCare</h2>
          <p className="mt-2 text-gray-700">
            Sistema desenvolvido para monitorar corais oceânicos com Arduino, criado para a Global Solutions FIAP em equipe.
          </p>
          <div className="mt-4 flex space-x-4">
            <a 
              href="https://github.com/werbethnunes/GS-EDGE--Equipe-OceanCare" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1b7e99] text-white py-2 px-4 rounded-lg hover:bg-[#167e88] transition duration-200"
            >
              Repositório no GitHub
            </a>
            <a 
              href="https://wokwi.com/projects/399793469763311617" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1b7e99] text-white py-2 px-4 rounded-lg hover:bg-[#167e88] transition duration-200"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

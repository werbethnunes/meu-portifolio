import React from "react";
import homeImg from "../assets/homeimg.svg"; 

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center">
      <div className="md:w-1/2 text-left md:mr-8">
        <h1 className="text-5xl font-bold mb-4 font-roboto text-[#1b7e99]">Olá, Bem Vindo! <br />Me chamo Werbeth Nunes.</h1>
        <p className="max-w-md mb-8 text-lg font-light font-roboto">
          Sou um apaixonado por tecnologia, recém-chegado ao mundo da programação.
          Atualmente, curso Engenharia de Software na FIAP, onde estou aprendendo os
          fundamentos e explorando as diversas possibilidades que a programação oferece.
          Estou animado para enfrentar novos desafios e descobrir como posso contribuir
          para o futuro da tecnologia.
        </p>
        <a
          href="/projects" 
          className="bg-[#1b7e99] text-white font-bold py-3 px-6 rounded hover:bg-[#1498a8] transition duration-300 shadow-lg"
        >
          Veja meus projetos
        </a>
      </div>
      <img
        src={homeImg}
        alt="Descrição da Imagem"
        className="w-3/4 md:w-1/2 lg:w-1/3 mt-8 md:mt-0" 
      />
    </div>
  );
};

export default Home;

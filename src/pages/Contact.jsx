import React, { useState } from 'react'; 
import contatoImg from '../assets/2.svg'; 

const Contato = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Seu nome é ${nome}, seu e-mail é ${email}, a mensagem é: ${mensagem}`);

        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
                <img src={contatoImg} alt="Imagem de contato" className="w-full max-w-md mb-4 md:mb-0 md:mr-4 hover:scale-105" />
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
                    <h1 className="text-4xl font-bold mb-6 text-[#1b7e99] text-center">Contato</h1>
                    <label htmlFor="nome" className="mb-1">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        className="border border-gray-300 rounded p-2 mb-4"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className="mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded p-2 mb-4"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="mensagem" className="mb-1">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        cols="30"
                        rows="5"
                        className="border border-gray-300 rounded p-2 mb-4"
                        value={mensagem}
                        onChange={e => setMensagem(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-[#1b7e99] text-white p-2 rounded-md hover:bg-[#167e88] transition duration-200">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contato;

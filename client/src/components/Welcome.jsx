import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const defaultStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value }) => (
  <input type={type} placeholder={placeholder} name={name} step="0.0001" value={value} onChange={e => handleChange(e, name)} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"/>
);

  const Welcome = () => {

  const connectWallet = () => {};

  const handleSubmit = () => {};

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Envie Criptomoedas <br /> para o mundo inteiro...{" "}
          </h1>
          <p className="text-left text-base mt-5 text-white font-light md:w-9/12 w-11/12">
            Conheça o mundo das criptomoedas. Compre e venda cripto facilmente
            na SuperCript.
          </p>
          <button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-[#7649F2] p-3 rounded-full cursor-pointer hover:bg-[#5b38bb]"
            onClick={connectWallet}
          >
            <p className="text-white font-semibold text-base">
              Conectar Carteira
            </p>
          </button>

          <div className="grid w-full grid-cols-2 sm:grid-cols-3 mt-10">
            <div className={`rounded-tl-2xl ${defaultStyles}`}>
              Confiabilidade
            </div>
            <div className={defaultStyles}>Segurança</div>
            <div className={`rounded-tr-2xl ${defaultStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${defaultStyles}`}>Web 3.0</div>
            <div className={defaultStyles}>Baixo custo</div>
            <div className={`rounded-br-2xl ${defaultStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-x1 h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#ddd" />
                </div>
                <BsInfoCircle fontSize={17} color="#ddd" />
              </div>
              <div>
                <p className="text-white font-light text-sm">endereço</p>
                <p className="text-white mt-1 font-semibold text-lg">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 w-full sm:w-96 flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Enviar para" name="addressTo" type="text" handleChange={() => {}}/>
            <Input placeholder="Valor (ETH)" name="amount" type="number" handleChange={() => {}}/>
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => {}}/>
            <Input placeholder="Mensagem..." name="message" type="text" handleChange={() => {}}/>

            <div className="h-[1px] w-full bg-purple-400 my-2"/>
            { false ? (
              <Loader />
            ) : (
              <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#825bf0] rounded-full cursor-pointer">Enviar</button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;

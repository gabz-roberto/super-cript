import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";

import { TransactionContext } from '../context/TransactionContext'

const defaultStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, type, name, value, handleChange }) => (
  <input
    type={type}
    step="0.0001"
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext)

  const handleSubmit = (event) => {
    const { addressTo, amount, keyword, message } = formData;

    event.preventDefault();

    if(!addressTo || !amount || !keyword || !message ) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 p-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Envie criptomoedas <br /> para qualquer lugar...
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Descubra o mundo das criptomoedas. Compre e venda cropto de maneira
            fácil na Super Krypt.
          </p>
          {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#1548DB] p-3 rounded-full cursor-pointer hover:bg-[#1137A8]"
          >
            <p className="text-white text-base font-semibold">
              Conectar Carteira
            </p>
          </button>)}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${defaultStyles}`}>
              Confiabilidade
            </div>
            <div className={`${defaultStyles}`}>Segurança</div>
            <div className={`rounded-tr-2xl ${defaultStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${defaultStyles}`}>Web 3.0</div>
            <div className={`${defaultStyles}`}>Baixo custo</div>
            <div className={`rounded-br-2xl ${defaultStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-start items-center w-full mt-10 mf:mt-0">
          <div className="p-3 items-start justify-end felx-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#eee" />
                </div>
                <BsInfoCircle fontSize={19} color="#eee" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Endereço de destino" name="addressTo" type="text" handleChange={handleChange}/>
            <Input placeholder="Valor (ETH)" name="amount" type="number" handleChange={handleChange}/>
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}/>
            <Input placeholder="Mensagem" name="message" type="text" handleChange={handleChange}/>
            <div className="h-[1px] w-full bg-blue-700 my-2"/>

            { false ? (
              <Loader />
            ) : (
              <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#1548DB] rounded-full cursor-pointer">
                Enviar
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { shortAddress } from "../utils/shortAddrenss";

import dummyData from "../utils/dummyData";

const TransactionCard = ({
  addressFrom,
  addressTo,
  amount,
  timestamp,
  message,
  keyword,
  url,
}) => {
  return (
    <div className="flex flex-col flex-1 m-4 bg-[#181918] 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3 ">
        <div className="w-full mb-6 p-2">
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
            <p className="text-white text-base">Remetente: {shortAddress(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
            <p className="text-white text-base">Destinatário: {shortAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Valor: {amount} ETH</p>

          {message && (
            <>
              <br />
              <p className="text-white text-base">Mensagem: {message}</p>
            </>
          )}

            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">
                {timestamp}
              </p>
            </div>

        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex justify-center items-center w-full 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py:12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Últimas Transações
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Conecte sua Conta Para Visualizar as Últimas Transações
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;

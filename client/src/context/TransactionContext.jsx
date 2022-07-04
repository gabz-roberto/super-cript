import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI);

  console.log(provider, signer, transactionContract);
};

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (event, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: event.target.value }))
    }


  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Por favor instale o Metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        //getAllTransactions();
      } else {
        console.log("Nenhum registro encontrado");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Objeto ethereum não presente");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Por favor instale o Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("Objeto ethereum não presente");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Por favor instale o Metamask");
    } catch (error) {
      console.log(error);
      throw new Error("Objeto ethereum não presente");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};

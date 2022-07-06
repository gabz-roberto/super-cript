import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [isLoading, setIsLoadind] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (event, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: event.target.value }))
    }

    const getAllTransactions = async () => {
      try {
        if (!ethereum) return alert("Por favor instale o Metamask");
        const transactionContract = getEthereumContract();
        const avaliableTransactions = await transactionContract.getAllTransactions();

        const struccturedTransactions = avaliableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }))
        
        console.log(struccturedTransactions)

        setTransactions(struccturedTransactions);
      } catch (error) {
        console.log(error)
      }
    }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Por favor instale o Metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("Nenhum registro encontrado");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Objeto ethereum não presente");
    }
  };

  const checkTransactions = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();

      window.localStorage.setItem('transactionCount', transactionCount)
      
    } catch (error) {
      console.log(error);
      throw new Error("Objeto ethereum não presente");
    }
  }

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
  
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount);
      // decimal to gwei

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // 21000 gwei = 0,00004793 eth
          value: parsedAmount._hex,
        }]
      });

      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

      setIsLoadind(true);
      console.log(`Loading: ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoadind(false);
      console.log(`Success: ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("Objeto ethereum não presente");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

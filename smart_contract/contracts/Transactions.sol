//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;
    // Criando uma variável do tipo uint256

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    // Criando um evento, semelhante a uma função, contendo os parametros e seus tipos

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    // Criando uma estrutura, semelhante a um objeto contendo os atributos e seus tipos

    TransferStruct[] transactions;
    // Criando um array de transações, uma variável transactions contendo um array do tipo TransferStruct, um array de objetos

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        // Criando uma função public, onde toda a aplicação terá acesso à função
        transactionCounter += 1;
        // Irá incrementar a cada transação realizada

        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        // Adicionando o objeto dentro do array contendo os atributos que serão recebidos
        // msg.sender -> recebe imediandamente quando se chama uma função específica na blockchain
    }

    // memory = armazenamento temporário
    function getAllTransactions () public view returns (TransferStruct[] memory) {
        // Irá retornar o array de transactions
    }

    function getTransactionCount() public view returns (uint256) {
        // Irá retornar um contador transactionCount
    }
}

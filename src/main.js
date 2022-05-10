const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a7da7e00d8e11f69ecb55fb4977f31585780661a020539ba8507019d45d89a18');
const myWalletAddress = myKey.getPublic('hex');

let chibiCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
chibiCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
chibiCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Chaithanya is', chibiCoin.getBalanceOfAddress(myWalletAddress));

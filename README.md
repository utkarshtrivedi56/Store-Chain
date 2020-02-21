# Store-Chain

Store-Chain is a decentralized Ethereum and IPFS based record storage system. You can store any amount of your medical records or 
any other information on the distributed IPFS network. The data or record goes to the IPFS network and get distributed on the network, 
then the IPFS network returned a hash of the data and we store that hash onto the Ethereum network. 
We need crypto-wallet to do the transaction such as Metamask. 

## Prerequisite
1. NodeJs
2. Metamask (3.14.1)
3. Truffle (v4.0.4)

## Instruction for truffle testing
1. Clone the repository to a local folder
2. Go to the cloned folder using command line
3. Execute truffle compile
4. Open a new command line and execute truffle develop to start the blockchain network
5. In the old terminal execute truffle migrate --reset
6. Execute truffle test

## Instruction for DApp

1. Now to start the nodeJs server execute npm run dev.
2. This should start the front end of the application at localhost:3000.
3. Open Metamask in your chrome browser and enter the key phrase you got after executing truffle develop.
4. Now you should be in the first get some test ether in your account.
5. Click on Choose button to select the image and submit the transaction.
6. Accept the transaction request from metamask pop-up.

## Dependencies

1. Currently this react Web App is deployed on Ropsten, Rinkeby and Kovan test network. 
2. One of its dependency is to use metamask wallet with it. 

## For Test Ethers
Ropsten test-network faucet ==> https://faucet.ropsten.be/  \
Rinkeby test-network faucet ==> https://faucet.rinkeby.io/

<small>Home Screen</small>
![Home Screen](assets/Home.PNG)

<small>Sample Transaction</small>
![Sample Transaction](assets/Transaction.JPG)

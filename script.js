const web3 = new Web3("http://localhost:7545")

const createCardsABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cards",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setCardProperties",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

console.log(createCardsABI);

const createCardsContractAddress = `0xd9145CCE52D386f254917e481eB44e9943F39138`






//GET THE BLOCK NUMBER TO START FROM
async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    console.log(latestBlockNumber)
    return latestBlockNumber
  }
  getBlockNumber()



  //INJECT WEB3 INTO THE APP

    window.addEventListener('load', async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                await ethereum.enable();
                web3.eth.sendTransaction({/* ... */});
            } catch (error) {
            }
        }
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            web3.eth.sendTransaction({/* ... */});
        }
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    });
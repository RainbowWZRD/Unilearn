const web3 = new Web3("http://localhost:7545")

async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    console.log(latestBlockNumber)
    return latestBlockNumber
  }
  getBlockNumber()

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
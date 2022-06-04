const { ethers }  = require("hardhat");
const cryptoBeetlesJSON = require('../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json')

async function main() {

    const abi = cryptoBeetlesJSON.abi
    // const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_PROJECT_ID);
    const provider = new ethers.providers.JsonRpcProvider(process.env.XSC_URL)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const signer = wallet.connect(provider)
    const cryptoBeetles = new ethers.Contract(process.env.CRYPTOBEETLES_ADDRESS, abi, signer)
    // cryptoBeetles.attach()

    let newItem = await cryptoBeetles.mint('https://ipfs.io/ipfs/QmbpwTRwSUUCRc7vM4dnZayFwMbPT3RLw7TSdwRSU3ZB2M')
    console.log(`New NFT minted successfully:: ${newItem}`);

    newItem = await cryptoBeetles.mint('https://ipfs.io/ipfs/QmWpiygCB7tnaY6T44f8t3qYdqorwjanwY9N3u4PHPXs86')
    console.log(`New NFT minted successfully:: ${newItem}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// CryptoBeetles successfully deployed to: 0x5c55926D8c5F5e1335649e6289f5dEf0cA44917D
// New NFT minted successfully:: [object Object]

// https://testnets.opensea.io/assets/0x5c55926d8c5f5e1335649e6289f5def0ca44917d/0

const {ethers} = require("hardhat");

async function main() {
    // Hardhat always runs compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    try {
        // We get the contract to deploy
        const XtNftStore = await ethers.getContractFactory("XtNftStore");
        const xtNftStore = await XtNftStore.deploy("XT.COM Crypto Beetles", "XTNFT");

        await xtNftStore.deployed();
        console.log(`CryptoBeetles successfully deployed to: ${xtNftStore.address}`);

        const newItem = await xtNftStore.mint("https://ipfs.io/ipfs/QmSX1ocRr7torptLkc4jKAd64jRrTpxSUAmMk13fP56CuV");
        console.log(`New NFT minted successfully:: ${newItem}`);

        // await xtNftStore.mint('https://ipfs.io/ipfs/QmbpwTRwSUUCRc7vM4dnZayFwMbPT3RLw7TSdwRSU3ZB2M');
        // console.log(`New NFT minted successfully`);

        // await xtNftStore.mint('https://ipfs.io/ipfs/QmWpiygCB7tnaY6T44f8t3qYdqorwjanwY9N3u4PHPXs86');
        // console.log(`New NFT minted successfully`);

        // await xtNftStore.transferOwnership("")
        // console.log(`TransferOwnership successfully`);

    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// Rinkeby CryptoBeetles successfully deployed to:
// 0x5c55926D8c5F5e1335649e6289f5dEf0cA44917D
// 0x7fB1bCBe67e8BD1be6edfed7c2BF8824eA05e97F
// 0x862ee406bcc5b5a174a6f7fb366518ba3ca8890a

// polygon mumbai:
//  0x5c55926D8c5F5e1335649e6289f5dEf0cA44917D
//  0x2Bea0b1107c2e06F6475797565A80009E87502EC

// xsc testnet:
// 0x5c55926D8c5F5e1335649e6289f5dEf0cA44917D

// xsc main net:
// 0x5c55926D8c5F5e1335649e6289f5dEf0cA44917D
// 0xd6368A0125836Ae6B12C63361088D1Fa46AdF7d0
// 0x862ee406bcc5b5a174a6f7fb366518ba3ca8890a

// https://testnets.opensea.io/assets/0x5c55926d8c5f5e1335649e6289f5def0ca44917d/0

// 1. https://ipfs.io/ipfs/QmSX1ocRr7torptLkc4jKAd64jRrTpxSUAmMk13fP56CuV
// 2. https://ipfs.io/ipfs/QmbpwTRwSUUCRc7vM4dnZayFwMbPT3RLw7TSdwRSU3ZB2M
// 3. https://ipfs.io/ipfs/QmWpiygCB7tnaY6T44f8t3qYdqorwjanwY9N3u4PHPXs86


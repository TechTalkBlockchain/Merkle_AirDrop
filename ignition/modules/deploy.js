const { ethers } = require("hardhat");
const fs = require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const tokenAddress = "0x66F542c963b49B4454dd0f4a3B63c3a6E416e7C6"; // Replace with your token address
    const merkleRoot = "0xb64c12f594572099ce1ebad0886aadeea65eca94757a68a08eb14c7e2820a692";
    const Airdrop = await ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(merkleRoot, tokenAddress);
    
    console.log("Airdrop contract deployed to:", airdrop.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

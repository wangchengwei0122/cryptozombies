import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners(); 
  console.log("Deploying contracts with the account:", deployer.address);

  const Zombie = await ethers.getContractFactory("Zombie");
  const zombie = await Zombie.deploy(deployer.address);
  await zombie.deployed();

  console.log("Zombie deployed to:", zombie.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
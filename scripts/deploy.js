const hre = require("hardhat");

async function main() {
  const task = await hre.ethers.deployContract("MessageContract");

  await task.waitForDeployment(); //deploying smart contract

  console.log("Deployed contract address:",`${task.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//Deployed contract address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

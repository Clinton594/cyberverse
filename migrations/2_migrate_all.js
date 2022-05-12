const TestToken = artifacts.require("TestToken");
const Presale = artifacts.require("Presale");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(TestToken, "TestToken", "TTK", 1000000);
  const token = await TestToken.deployed();

  // Deploy presale
  await deployer.deploy(Presale, 1000, accounts[0], token.address);
  const presale = await Presale.deployed();

  console.log(presale.address);

  console.log("Contract deployed");
};

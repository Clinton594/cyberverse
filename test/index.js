const expect = require("expect");
const Token = artifacts.require("TestToken");
const Presale = artifacts.require("Presale");

contract("Testing Two Contracts", (accounts) => {
  describe("TestToken Block", () => {
    const token = Token.new("TestToken", "TTk", 3000, 8);
    it("Should have 3000 piceces", async () => {
      const totalSupply = await token.totalSupply();
      expect(totalSupply.toString()).to.be.equal(3000);
    });
  });
});

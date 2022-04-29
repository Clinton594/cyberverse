const { expect } = require("expect");
const Token = artifacts.require("TestToken");
const Presale = artifacts.require("Presale");

contract("Testing Two Contracts", (accounts) => {
  describe("TestToken Block", () => {
    let token, presale;
    beforeEach(async () => {
      token = await Token.new("TestToken", "TTk", 3000, 8);
      presale = await Presale.new(100003, accounts[0], token.address);
    });

    it("Should have 3000 piceces", async () => {
      const totalSupply = await token.totalSupply();
      expect(totalSupply.toString()).toBe("3000");
    });

    it("Rate should be 100003", async () => {
      const rate = await presale.getTokenRate();
      expect(rate.toString()).toBe("100003");
    });

    it("Presale is paused", async () => {
      const presaleStatus = await presale.getStatus();
      expect(presaleStatus).toBe(true);
    });

    it("Presale Should be toggled on", async () => {
      await presale.togglePause({ from: accounts[0] });
      const presaleStatus = await presale.getStatus();
      expect(presaleStatus).toBe(false);
    });

    it.only("Presale Should give me Correct eth Value", async () => {
      const ethValue = await presale.getTokensPerEth("61473000");
      expect(ethValue.toString()).toBe("614");
    });
  });
});

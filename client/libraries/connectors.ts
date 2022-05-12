import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import presale from "../contracts/Presale.json";
import networks from "../constants/networks.json";

const getContractInstance = async (provider: any, chainId: number, account: string | undefined) => {
  const contractAddress = networks[chainId].address;
  if (typeof account === "string") {
    const signer = provider.getSigner(account);
    return new ethers.Contract(contractAddress, presale.abi, signer);
  }
  return new ethers.Contract(contractAddress, presale.abi, provider);
};

const connectToWallet = async (activate: Function, provider: any, connector: any, callback: Function) => {
  if (connector === undefined) {
    try {
      activate(provider);
      localStorage.setItem("persist", "true");
      callback({ status: true, title: "Connected", message: "App has been connected to Metamask" });
    } catch (error) {
      callback(error);
    }
  } else {
    callback({ status: false, title: "Wallet Not Found", message: "Please Install Metamask" });
  }
};

const injectProvider = new InjectedConnector({ supportedChainIds: Object.keys(networks).map((x) => +x) });

const toEther = (number: number): number => {
  const res: any = ethers.utils.formatEther(number);
  return Math.round(res * 1e4) / 1e4;
};

export { injectProvider, toEther, connectToWallet, getContractInstance };

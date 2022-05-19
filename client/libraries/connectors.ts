import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers, BigNumber } from "ethers";
import presale from "../contracts/Presale.json";
import networks from "../constants/networks.json";
import projectConfig from "../constants/project.config";

export const getContractInstance = async (provider: any, chainId: number, account: string | undefined) => {
  const contractAddress = networks[chainId].address;
  if (typeof account === "string") {
    const signer = provider.getSigner(account);
    return new ethers.Contract(contractAddress, presale.abi, signer);
  }
  return new ethers.Contract(contractAddress, presale.abi, provider);
};

export const connectToWallet = async (activate: Function, provider: any, connector: any, callback: Function) => {
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

export const injectProvider = new InjectedConnector({ supportedChainIds: Object.keys(networks).map((x) => +x) });

export const toTimestamp = (strDate: string): number => Date.parse(strDate) / 1000;

export const toEther = (number: number): number => {
  const res: any = ethers.utils.formatEther(number);
  return Math.round(res * 1e4) / 1e4;
};

export const tokenToWei = (token: string) => {
  const bigint = BigInt(10 ** projectConfig.decimal);
  return ethers.BigNumber.from(bigint).div(token).toString();
};

export const weiToToken = (wei: string) => {
  const bigint = BigInt(10 ** projectConfig.decimal);
  return ethers.BigNumber.from(bigint).div(wei).toString();
};

export const getTokenSold = async (contract: any) => {
  const result = await contract.getTotalReceived();
  return result.toString();
};

export const getTotalContributors = async (contract: any) => {
  const result = await contract.getTotalContributors();
  return result.toString();
};

export const getPresaleStatus = (contract: any) => {
  return contract.getStatus();
};

export const getRate = async (contract: any) => {
  const result = await contract.getTokenRate();
  return weiToToken(result);
};

export const toggleContractStatus = async (contract: any, account: string) => {
  const result = await contract.togglePause({ from: account });
  return result;
};

export const setContractRate = async (contract: any, account: string, rate: string) => {
  const result = await contract.setTokenRate(rate, { from: account });
  return result;
};

export const setEnddate = async (contract: any, account: string, timestamp: number) => {
  const result = await contract.setEndate(timestamp, { from: account });
  return result;
};

export const getEndDate = async (contract: any) => {
  const enddate = await contract.getEndate();
  console.log(enddate.toString());

  const date = new Date(enddate.toString() * 1000);
  return date.toLocaleString();
};

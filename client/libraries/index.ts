import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";

const getLibrary = (provider:any, connector:any)=>{
  return new Web3Provider(provider);
}

const connect = async (connector:any)=>{
  // Read-only
  let ethersProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:9545/");
  const {provider} = await connector.activate();
  // Signer
  const signer = provider.getSigner();
  ethersProvider = new Web3Provider(signer);
  // return ethersProvider;
}

const provider = new InjectedConnector({supportedChainIds:[1337]});

const toEther = (number:number):number => {
  const res:any =  ethers.utils.formatEther(number);
  return Math.round(res * 1e4) / 1e4;
}

export { getLibrary, connect, provider, toEther }
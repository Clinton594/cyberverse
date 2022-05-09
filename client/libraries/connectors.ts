import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { ListGroup } from "react-bootstrap";
import presale from "../contracts/Presale.json";

const getContract = async (provider: any, account: any) => {
  const signer = provider.getSigner(account);
  const contractAddress = "0x1a625BB856AF4aD62D87361B93B5bc5a353E6D8f";

  // Send 4ether to address 2
  // await signer
  //   .sendTransaction({ to: "0x6d42e738d42429d89982f789e59e088bca5e4b4d", value: "4000000000000000000" })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((e) => {
  //     console.log(JSON.stringify(e));
  //   });

  // Confirm the money was sent
  // const balance = await library.getBalance("0x6d42e738d42429d89982f789e59e088bca5e4b4d");
  // console.log(ethers.utils.formatEther(balance));

  const contract = new ethers.Contract(contractAddress, presale.abi, provider);
  console.log(contract);

  const result = await contract.getTokenRate();
  console.log(result);
};

const connectToWallet = async (activate: Function, provider: any, connector: any, callback: Function) => {
  // console.log(connector);

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

const injectProvider = new InjectedConnector({ supportedChainIds: [1337, 1, 5] });

const toEther = (number: number): number => {
  const res: any = ethers.utils.formatEther(number);
  return Math.round(res * 1e4) / 1e4;
};

export { injectProvider, toEther, connectToWallet, getContract };
export default getContract;

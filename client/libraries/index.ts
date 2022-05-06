import { ethers } from "ethers";
import presale from "../contracts/Presale.json"



var address:string, url:string;
if(process.env.NODE_ENV === "development"){
  url = "http://127.0.0.1:9545/"
  address = "0x1a625BB856AF4aD62D87361B93B5bc5a353E6D8f"
}else{
  url = "https://ropsten.infura.io/v3/YOUR-PROJECT-ID"
  address = "0x1a625BB856AF4aD62D87361B93B5bc5a353E6D8f"
}



const connectWallet = async ()=>{
  if(window.ethereum !== undefined){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("metamask found");
    
  }else{
    throw new Error("Metamask not installed")
  }
}


export {connectWallet}
import React from "react";
import { Provider } from "react-redux";
import HtmlHead from "../components/HTMLHead";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../redux/store";

const getLibrary = (provider: any) => {
  return new Web3Provider(provider); //Ethers provider
};

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <HtmlHead />
        <Component {...pageProps} />
      </Provider>
    </Web3ReactProvider>
  );
}

export default MyApp;

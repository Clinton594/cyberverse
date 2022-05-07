import React from 'react';
import HtmlHead from '../components/HTMLHead'
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../libraries/index';
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import store from '../redux/store';
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }) {
  return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <HtmlHead/>
          <Component {...pageProps} />
        </Provider>
      </Web3ReactProvider>
  ) 
}

export default MyApp

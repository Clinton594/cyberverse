import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Stack, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import projectConfig from "../constants/project.config";
import { getContractInstance, connectToWallet, injectProvider, toEther } from "../libraries/connectors";
import { setWallet, setConnection, setBalance, setWalletVisibility, setIsAdmin } from "../redux/presaleReducer";
import { setLoading, setToast } from "../redux/statusReducer";
import { IStore } from "../redux/store";
import Toaster from "../components/Toaster";

export default function Header() {
  const { presale } = useSelector((store: IStore) => store);
  const dispatch = useDispatch();
  const {
    account, //The wallet address provided by your connector
    activate, // Connnect to a wallet
    active, // Returns status of the connection to the wallet above
    chainId,
    connector, // the current connector that the app is connected to in libraries/connectors (in this case it's injected)
    library, // ethers.js instance from @ethersproject/providers
    deactivate, //Disconnect from the wallet
    // error,
    // setError,
  } = useWeb3React();
  const toggleBalanceVisibility = () => {
    dispatch(setWalletVisibility(!presale.walletIsVisible));
  };

  useEffect(() => {
    dispatch(setConnection(active));

    dispatch(setWallet(account));

    if (library !== undefined) {
      library.getBalance(account).then((balance: number) => {
        const formattedBalance: number = toEther(balance);
        dispatch(setBalance(formattedBalance));
      });
    } else {
      dispatch(setBalance(0));
    }

    if (active) {
      (async () => {
        const contract = await getContractInstance(library, chainId, account);
        const owner = await contract.getOwner();
        dispatch(setIsAdmin(owner === account));
      })();
    } else {
      dispatch(setIsAdmin(false));
    }
  }, [active, account, library]);

  useEffect(() => {
    let persist = localStorage.getItem("persist");
    if (persist !== null) {
      persist = JSON.parse(persist);
      if (persist) connectToWallet(activate, injectProvider, connector, (response) => {});
    }
  }, []);

  return (
    <header className="mt-3">
      <Stack direction="horizontal" gap={3}>
        <div>
          <Link href="/">
            <a className="text-white logo">
              <Image src={projectConfig.logo} alt={projectConfig.name} {...{ height: 50, width: "auto" }} />
              <strong>{projectConfig.name}</strong>
            </a>
          </Link>
        </div>
        <div className="ms-auto "></div>
        {presale.balance > 0 && (
          <div className="d-none d-lg-block">
            <Button onClick={toggleBalanceVisibility} variant="success">
              {presale.walletIsVisible == true && (
                <>
                  <small>
                    {presale.balance} {projectConfig.blockChainTokan}
                  </small>
                  <i className="fas fa-eye-slash ms-2"></i>
                </>
              )}
              {!presale.walletIsVisible && <i className="fas fa-eye ms-2"></i>}
            </Button>
          </div>
        )}
        <div className="vr bg-white"></div>
        <div>
          {!presale.isConnected && (
            <Button
              onClick={() => {
                connectToWallet(activate, injectProvider, connector, (response: object) => {
                  dispatch(setToast({ ...response, show: true }));
                });
              }}
              variant="warning"
            >
              Connect Wallet
            </Button>
          )}
          {presale.isConnected && (
            <Button
              onClick={() => {
                deactivate();
                localStorage.setItem("persist", "false");
              }}
              variant="danger"
            >
              Disconnect Wallet
            </Button>
          )}
        </div>
        <Toaster />
      </Stack>
    </header>
  );
}

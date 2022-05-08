import React, { useEffect, useState } from 'react'
import { Stack, Image, Button } from 'react-bootstrap';
import Link from 'next/link';
import projectConfig from '../constants/project.config';
import { useWeb3React } from "@web3-react/core";
import { connect, provider, toEther } from '../libraries';
import { useSelector, useDispatch } from 'react-redux';
import {setWallet, setConnection, setBalance} from '../redux/presaleReducer';
import {IStore} from "../redux/store"

export default function Header() {
  const { presale } = useSelector((store:IStore)=>store);
  const dispatch = useDispatch();

  const {
    account,
    activate,
    active,
    // chainId,
    // connector,
    library,
    deactivate,
    // provider,
    // error,
    // setError,
  } = useWeb3React();

  useEffect(()=>{
    dispatch(setConnection(active));
    
    dispatch(setWallet(account));
    
  }, [active, account]);

  useEffect(()=>{
    if(library !== undefined){
      library.getBalance(account).then((balance :  number)=>{
        const formattedBalance :number = toEther(balance);        
        dispatch(setBalance(formattedBalance))
      })
    }else{
      dispatch(setBalance(0));
    }
  }, [library])

  return (
    <header className="mt-3">
      <Stack direction="horizontal" gap={3}>
        <div>
          <Link href="/" ><a className='text-white logo'><Image src={projectConfig.logo} alt={projectConfig.name} {...{ height: 50, width: "auto" }} />
              <strong>{projectConfig.name}</strong></a></Link>
        </div>
        <div className="ms-auto "></div>
        {
          presale.balance > 0 && (
            <div className="d-none d-lg-block">
              <Button variant="success"> {presale.balance} {projectConfig.blockChainTokan} </Button> 
            </div>
          )
        }
        <div className="vr bg-white"></div>
        <div>
          {
            !presale.isConnected && (
              <Button onClick={()=>{  activate(provider);}} variant="warning">Connect Wallet</Button>
            )
          }
          {
            presale.isConnected && (
              <Button onClick={()=>{ deactivate(); }} variant="danger">Disconnect Wallet</Button>
            )
          }
        </div>
      </Stack>
    </header>
  )
}

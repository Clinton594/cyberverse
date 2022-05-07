import React, { useEffect, useState } from 'react'
import { Stack, Image, Button } from 'react-bootstrap';
import Link from 'next/link';
import projectConfig from '../constants/project.config';
import { useWeb3React } from "@web3-react/core";
import { connect, provider } from '../libraries';
import { useSelector, useDispatch } from 'react-redux';
import {setWallet, setConnection} from '../redux/presaleReducer';

export default function Header() {
  const { presale }:object = useSelector((store)=>store);
  const dispatch = useDispatch();

  const {
    account,
    activate,
    active,
    // chainId,
    // connector,
    // library,
    deactivate,
    // provider,
    // error,
    // setError,
  } = useWeb3React();

  useEffect(()=>{
    dispatch(setConnection(active));
    console.log(active);
    
    dispatch(setWallet(account));
  }, [active, account])

  return (
    <header className="mt-3">
      <Stack direction="horizontal" gap={3}>
        <div>
          <Link href="/" ><a className='text-white logo'><Image src={projectConfig.logo} alt={projectConfig.name} {...{ height: 50, width: "auto" }} />
              <strong>{projectConfig.name}</strong></a></Link>
        </div>
        <div className="ms-auto "></div>
        <div className="d-none d-lg-block">
          <Button variant="success">2.05 BNB </Button> 
        </div>
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

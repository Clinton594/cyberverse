import React, { useEffect, useState } from 'react'
import { Stack, Image, Button } from 'react-bootstrap';
import Link from 'next/link';
import projectConfig from '../constants/project.config';
import { useWeb3React } from "@web3-react/core";
import { connect, provider } from '../libraries';

export default function Header() {
  const [presale, setPresale] = useState({connected:false});
  const {
    account,
    activate,
    active,
    chainId,
    connector,
    deactivate,
    // provider,
    error,
    setError,
  } = useWeb3React();

  useEffect(()=>{
    setPresale({...presale, connected:active})
  }, [active])
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
            !presale.connected && (
              <Button onClick={()=>{ 
                activate(provider, (response)=>{console.log(response);});
              }} variant="warning">Connect Wallet</Button>
            )
          }
          {
            presale.connected && (
              <Button onClick={()=>{ deactivate(); }} variant="danger">Disconnect Wallet</Button>
            )
          }
        </div>
      </Stack>
    </header>
  )
}

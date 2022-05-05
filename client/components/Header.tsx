import React from 'react'
import { Stack, Image, Button } from 'react-bootstrap';
import Link from 'next/link';
import projectConfig from '../constants/project.config';

export default function Header() {
  return (
    <header className="mt-3">
      <Stack direction="horizontal" gap={3}>
        <div>
          <Link href="/"><a className='text-white'><Image src={projectConfig.logo} alt={projectConfig.name} {...{ height: 50, width: "auto" }} />
              <strong>{projectConfig.name}</strong></a></Link>
        </div>
        <div className="ms-auto "></div>
        <div className="d-none d-lg-block">
          <Button variant="success">2.05 BNB </Button> 
        </div>
        <div className="vr bg-white"></div>
        <div>
          <Button variant="warning">Connect Wallet</Button>
        </div>
      </Stack>
    </header>
  )
}

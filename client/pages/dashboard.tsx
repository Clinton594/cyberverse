import React from 'react';
import style from "../styles/Dashboard.module.css"
import { Stack, Image, Button } from 'react-bootstrap';
import Link from 'next/link';
import projectConfig from '../constants/project.config';

export default function dashboard() {
  return (
    <div className={style.main}>
      <header className="mt-3">
        <Stack direction="horizontal" gap={3}>
          <div>
            <Link href="/">
              <Image src={projectConfig.logo} alt={projectConfig.name} {...{ height: 50, width: 100 }} />
            </Link>
          </div>
          <div className="ms-auto "></div>
          <div className="d-none d-lg-block">
            <Button variant="success">2.05 BNB </Button> 
          </div>
          <div className="vr"></div>
          <div>
            <Button variant="warning">Connect Wallet</Button>
          </div>
        </Stack>
      </header>
      <section>

      </section>
    </div>
  )
}

import { useState } from "react";
import Typed from "react-typed";
import Particles from "react-tsparticles";
import Countdown from "react-countdown";
import { loadFull } from "tsparticles";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { Button, Form, Stack, Row, Col, Container, Badge, Card, Image } from "react-bootstrap";

import { IStore } from "../types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import projectConfig from "../constants/project.config";
import particlesConfig from "../constants/particles.config.json";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";
import { getTokenQty } from "../libraries/connectors";
import { dateInstance, debounce, num_format } from "../libraries/utils";

export default function Home() {
  const [formdata, setFormdata] = useState({ token: 0, crypto: 0 });
  const { presale, contract } = useSelector((store: IStore) => store);
  const { active, library, chainId, account } = useWeb3React();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  const getTokenQuantity = debounce(async (e) => {
    const response = await getTokenQty(library, chainId, account, e.target.value);
    const token = response.toString();
    setFormdata({ token, crypto: e.target.value });
  });
  return (
    <main className={styles.main}>
      <Container>
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
        <div className="position-relative">
          <Header />
          <Section className={styles.banner}>
            <Row>
              <Col sm="12" lg="6">
                <div className={`verital_center w-100`}>
                  <h1 className="text-white">The world's most reliable top quality DEx - Presale</h1>
                  <p>
                    <Typed
                      className="text-muted"
                      strings={[`Contribute To Get ${projectConfig.token} tokens`]}
                      typeSpeed={40}
                      loop
                    />
                  </p>
                  <div className={`${styles.distri} mb-3`}>
                    {presale.isConnected && presale.walletIsVisible && (
                      <Stack className="d-none d-lg-block">
                        <Badge className="mb-2" pill bg="success">
                          <small>Connected to : {presale.wallet}</small>
                        </Badge>
                      </Stack>
                    )}
                    <h6>Current Distribution Section End 101/350</h6>
                    <div className={styles.my_progress}>
                      <div className="progress-bar px-3">
                        <span>
                          9,000,000 <small>50%</small>
                        </span>{" "}
                      </div>
                    </div>

                    <Countdown date={dateInstance(contract.enddate)} renderer={Timer} />
                  </div>
                </div>
              </Col>
              <Col sm="12" lg="6" offset-lg="3">
                <Card className={styles.swap}>
                  <div className={styles.swaphead}>
                    <h5>Swap</h5>
                    <p>
                      1{projectConfig.blockChainTokan} = {num_format(contract.rate)} $primeDex
                    </p>
                  </div>
                  <div className={styles.swapbody}>
                    <article>
                      <figure>
                        <Image width={30} className="me-2" src="/img/bnb.png" /> <b>{projectConfig.blockChainTokan}</b>
                      </figure>
                      <Form.Control
                        type="number"
                        defaultValue={formdata.crypto}
                        className="me-auto"
                        onChange={getTokenQuantity}
                        placeholder={`Swap how many ${projectConfig.blockChainTokan} ?`}
                      />
                    </article>
                    <article className="d-flex">
                      <Image width={50} className="me-auto ms-auto" src="/img/down-svgrepo-com.svg" />
                    </article>
                    <article>
                      <figure>
                        <Image width={50} src={projectConfig.logo} /> <b>${projectConfig.ticker}</b>
                      </figure>
                      <Form.Control
                        type="text"
                        className="me-auto"
                        defaultValue={num_format(formdata.token)}
                        readOnly={true}
                        placeholder={`You'll recieve ${projectConfig.ticker}`}
                      />
                    </article>
                  </div>
                  {active && (
                    <div className={`${styles.swapfoot} d-flex`}>
                      <Button variant="warning" className="me-auto ms-auto">
                        Swap Token
                      </Button>
                    </div>
                  )}
                </Card>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row></Row>
          </Section>
          <Footer />
        </div>
      </Container>
    </main>
  );
}

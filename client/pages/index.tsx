import Particles from "react-tsparticles";
import Typed from "react-typed";
import { loadFull } from "tsparticles";
import { Button, Form, Stack, Row, Col, Container, Badge } from "react-bootstrap";
import particlesConfig from "../constants/particles.config.json";
import projectConfig from "../constants/project.config";
import Header from "../components/Header";

import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { IStore } from "../types";

export default function Home() {
  const { presale } = useSelector((store: IStore) => store);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <main className={styles.main}>
      <Container>
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
        <div className="position-relative">
          <Header />
          <section className={styles.banner}>
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
                </div>
              </Col>
              <Col sm="12" lg="6">
                <div className={styles.distri}>
                  {presale.isConnected && presale.walletIsVisible && (
                    <Stack className="d-none d-lg-block">
                      <Badge className="mb-2" pill bg="success">
                        <small>Connected to : {presale.wallet}</small>
                      </Badge>
                    </Stack>
                  )}
                  <Stack direction="horizontal" gap={5}>
                    <Form.Control
                      type="number"
                      className="me-auto"
                      placeholder={`How many ${projectConfig.ticker} do you want`}
                    />
                    <Button variant="warning">Contribute</Button>
                  </Stack>
                  <h6>Current Distribution Section End 101/350</h6>
                  <div className={styles.my_progress}>
                    <div className="progress-bar px-3">
                      <span>
                        9,000,000 <small>50%</small>
                      </span>{" "}
                    </div>
                  </div>

                  <div className={styles.countdown}>
                    <ul className="row">
                      <li className="col-md-3">
                        <article>
                          {" "}
                          <span className="days">00</span>
                          <p className="days_ref">Days</p>
                        </article>
                      </li>
                      <li className="col-md-3">
                        <article>
                          {" "}
                          <span className="hours">00</span>
                          <p className="hours_ref">Hours</p>
                        </article>
                      </li>
                      <li className="col-md-3">
                        <article>
                          <span className="minutes">00</span>
                          <p className="minutes_ref">Minutes</p>
                        </article>
                      </li>
                      <li className="col-md-3">
                        <article>
                          <span className="seconds">00</span>
                          <p className="seconds_ref">Seconds</p>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <Footer />
        </div>
      </Container>
    </main>
  );
}

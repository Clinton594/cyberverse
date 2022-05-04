import Head from "next/head";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Stack, Row, Col, Container, Image } from "react-bootstrap";
import particlesConfig from "../constants/particles.config";
import projectConfig from "../constants/project.config";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Head>
        <title>{projectConfig.name}</title>
        <meta name="description" content={projectConfig.description} />
        <meta name="keywords" content={projectConfig.keywords} />
        <link rel="icon" href={projectConfig.favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <Container>
          <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
          <div className="position-relative">
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
            <section className={styles.banner}>
              <Row>
                <Col sm="12" lg="6" className={styles.verital_center}>
                  <h1>Build a new kind of Decentralized Application</h1>
                  <p className="text-muted">Contribute To Get {projectConfig.token} tokens</p>
                </Col>
                <Col sm="12" lg="6">
                  <div className={styles.distri}>
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
                      <div
                        className="progress-bar px-3"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
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
            <footer className={styles.footer}><Link href="dashboard"> Admin Dashboard</Link> </footer>
          </div>
        </Container>
      </main>
    </>
  );
}

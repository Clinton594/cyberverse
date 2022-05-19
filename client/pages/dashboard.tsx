import React from "react";
import { useSelector } from "react-redux";
import { Container, Tabs, Tab, Stack } from "react-bootstrap";

import { IStore, Icard } from "../types";
import Header from "../components/Header";
import Section from "../components/Section";
import Pane1 from "../components/Pane1";
import Pane2 from "../components/Pane2";
import Footer from "../components/Footer";
import style from "../styles/Dashboard.module.css";

import projectConfig from "../constants/project.config";

export default function Dashboard({ cardlist, transactions }) {
  const { presale, contract } = useSelector((store: IStore) => store);
  cardlist = cardlist.map((x: Icard) => {
    x.value = typeof contract[x.key] === "boolean" ? projectConfig.status[contract[x.key]] : contract[x.key];
    return x;
  });

  Array.prototype.chunk = function (n: number): number[] {
    if (!this.length) return [];
    return [this.slice(0, n)].concat(this.slice(n).chunk(n));
  };

  const chunked = cardlist.chunk(2);
  return (
    <main className={style.main}>
      <Container>
        <Header />
        {presale.isAdmin && (
          <>
            <Section>
              <Tabs defaultActiveKey="home" transition={true} className="mb-3">
                <Tab eventKey="home" title="Home">
                  <Pane1 style={style} listCard={chunked} transactions={transactions} />
                </Tab>
                <Tab eventKey="settings" title="Settings">
                  <Pane2 style={style} />
                </Tab>
              </Tabs>
            </Section>
            <Section>
              <Footer />
            </Section>
          </>
        )}
        {!presale.isAdmin && (
          <Section>
            <Stack style={{ alignItems: "center" }}>
              <i className="fas fa-info-circle text-white" style={{ fontSize: "xxx-large" }}></i>
              <h1 className="text-white"> YOU ARE NOT AN ADMIN</h1>
            </Stack>
          </Section>
        )}
      </Container>
    </main>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      cardlist: [
        { name: "Token Sold", key: "tokenSold", icon: "fab fa-bitcoin", value: 0, variant: "primary" },
        { name: "Total Contributors", key: "totalContributors", icon: "far fa-user", value: 0, variant: "success" },
        { name: "Uptime", key: "enddate", icon: "fas fa-clock", value: "", variant: "info" },
        { name: "Presale Status", key: "status", icon: "fas fa-info", value: "false", variant: "danger" },
      ],
      transactions: [
        {
          address: "0x484ndsofskf99ew09djsp9dj99239",
          amount: "0.05",
          quantity: "43,5909",
          rate: "20,000",
          date: "27th April, 2022",
        },
        {
          address: "0xjduejwe8933jucn3832dzd9339sd9f",
          amount: "0.54",
          quantity: "43,5909",
          rate: "20,000",
          date: "27th April, 2022",
        },
        {
          address: "0x484ndsofskf99ew09djsp9dj99234",
          amount: "0.14",
          quantity: "43,5909",
          rate: "20,000",
          date: "27th April, 2022",
        },
        {
          address: "0x484ndsofskf9sfww09djsp9dj99239",
          amount: "2.75",
          quantity: "43,5909",
          rate: "20,000",
          date: "27th April, 2022",
        },
        {
          address: "0x484ndsdsfekf99ew09djsp9dj99239",
          amount: "5.15",
          quantity: "43,5909",
          rate: "20,000",
          date: "27th April, 2022",
        },
      ],
    },
  };
};

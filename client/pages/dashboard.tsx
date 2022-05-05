import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Header from '../components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/Dashboard.module.css"


export default function dashboard() {
  return (
    <main className={style.main}>
      <Header/>
      <section>
      </section>
    </main>
  )
}

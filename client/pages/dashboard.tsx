import React from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import Section from "../components/Section"
import Header from '../components/Header';

import style from "../styles/Dashboard.module.css"
import Pane1 from '../components/Pane1';
import Pane2 from '../components/Pane2';

export default function Dashboard({cardlist, transactions}) {
  Array.prototype.chunk = function (n){
    if(!this.length) return [];
    return [this.slice(0, n)].concat(this.slice(n).chunk(n));
  }

  const chunked = cardlist.chunk(2);
  
  return (
    <main className={style.main}>
      <Container>
        <Header/>
        <Section>
          <Tabs defaultActiveKey="home" transition={true} className="mb-3">
            <Tab eventKey="home" title="Home">
              <Pane1 style={style} listCard={chunked} transactions={transactions} />            
            </Tab>
            <Tab eventKey="settings" title="Settings">
              <Pane2 style={style} listCard={chunked} transactions={transactions} />            
            </Tab>
          </Tabs>
        </Section>
        
      </Container>
    </main>
  )
}

export const getStaticProps = ()=>{
   return {
     props:{
       cardlist : [
          {name:"Token Sold", key:"tokenSold", icon:'fab fa-bitcoin', value:"4,5000", variant:"primary"},
          {name:"Total Contributors", key:"contributors", icon:"far fa-user", value:"1,600", variant:"success"},
          {name:"Uptime", key:"uptime", icon:"fas fa-clock", value:"13 Days", variant:"info"},
          {name:"Presale Status", key:"status", icon:"fas fa-info", value:"Paused", variant:"danger"},
        ],
        transactions:[
          {address:"0x484ndsofskf99ew09djsp9dj99239", amount:"0.05", quantity:"43,5909", rate:"20,000", date:"27th April, 2022"},
          {address:"0xjduejwe8933jucn3832dzd9339sd9f", amount:"0.54", quantity:"43,5909", rate:"20,000", date:"27th April, 2022"},
          {address:"0x484ndsofskf99ew09djsp9dj99239", amount:"0.14", quantity:"43,5909", rate:"20,000", date:"27th April, 2022"},
          {address:"0x484ndsofskf99ew09djsp9dj99239", amount:"2.75", quantity:"43,5909", rate:"20,000", date:"27th April, 2022"},
          {address:"0x484ndsofskf99ew09djsp9dj99239", amount:"5.15", quantity:"43,5909", rate:"20,000", date:"27th April, 2022"}
        ]
     },
     
   }; 
}

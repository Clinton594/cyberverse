import React from 'react';
import { Row, Col, Card, Figure, Container } from 'react-bootstrap';
import Header from '../components/Header';
import CardView from '../components/CardView';
import projectConfig from '../constants/project.config';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/Dashboard.module.css"

export default function dashboard({cardlist}) {
  Array.prototype.chunk = function (n){
    if(!this.length) return [];
    return [this.slice(0, n)].concat(this.slice(n).chunk(n));
  }

  const chunked = cardlist.chunk(2);
  
  return (
    <main className={style.main}>
      <Container>
        <Header/>
        <section className='mt-5'>
          <Row>
            <Col md="6">
              <Card>
                <Figure className={[style.h20, style.overflow_hidden].join(" ")}>
                  <Card.Img variant='top' alt='Analytics' src='/analytics-amico.png'/>
                </Figure>
              </Card>
            </Col>
            <Col md="6" className="verital_fill">
              {
                chunked.length > 0 && chunked.map((cards, index)=>(
                  <Row key={index}>
                  {
                    cards.map((card)=>(
                      <Col md="6" key={card.key}>
                        <CardView style={style} card={card}/>
                      </Col>
                    ))
                  }
                </Row>
                ))
              }
            </Col>
          </Row>
        </section>
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
        ]
     }
   }; 
}

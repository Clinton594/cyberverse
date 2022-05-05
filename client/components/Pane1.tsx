import React from 'react'
import { Row, Col, Card, Figure, Table } from 'react-bootstrap';
import CardView from './CardView';
import Section from './Section'
import projectConfig from '../constants/project.config';

export default function Pane1({style, listCard, transactions}) {
  return (
    <>
      <Section className='mt-5'>
        <Row>
          <Col md="6">
            <Card className='mb-3'>
              <Figure className={[style.h20, style.overflow_hidden].join(" ")}>
                <Card.Img variant='top' alt='Analytics' src='/analytics-amico.png'/>
              </Figure>
            </Card>
          </Col>
          <Col md="6" className="verital_fill">
            {
              listCard.length > 0 && listCard.map((cards, index)=>(
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
      </Section>
      <Section className="bg-white p-4">
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>Address</th>
              <th>Amount</th>
              <th>Quanty</th>
              <th>Rate</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.length > 0 && transactions.map((transaction, index)=>(
                <tr key={transaction.address} >
                  <td>{index + 1}</td>
                  <td>{transaction.address}</td>
                  <td>{transaction.amount} BNB</td>
                  <td>{transaction.quantity} {projectConfig.ticker}</td>
                  <td>{transaction.rate} {projectConfig.ticker} per BNB</td>
                  <td>{transaction.date} </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Section>
    </>
  )
}

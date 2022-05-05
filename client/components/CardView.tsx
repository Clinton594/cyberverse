import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardView({card, style}) {
  return (
    <Card bg={card.variant} className={`${style.card} mb-2 ${style.zoomable}`} >
      <Card.Body>
        <p>
          <i className={card.icon}></i>
        </p>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          <span>
            {card.value}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

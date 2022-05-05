import React, { useState } from 'react'
import Fieldset from './Fieldset';
import Section from './Section';
import {Form, Button, Row, Col, Card, Stack} from "react-bootstrap"


export default function Pane2({style}) {
  const [data, setData] = useState({status:"Paused", rate:"20,000 PrimeDex", balance:"250,000", endDate:"27th May, 2022"});
  return (
    <>
      <Section>
        <Row>
          <Col md="6">
            <Card>
              <Fieldset title="Status" value={data.status}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Switch
                      label="Toggle the status of the presale"
                    />
                  </Form.Group>
                </Form>
              </Fieldset>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Fieldset title="Rate" value={data.rate}>
                <Form>
                  <Form.Group className="mb-3">
                      <Form.Label><small className='text-muted'>Enter the presale rate</small> </Form.Label>
                      <Stack direction='horizontal' gap={3}>
                        <Form.Control type="number" required /> 
                      <Button variant='success' type="submit">Submit</Button>
                    </Stack>
                  </Form.Group>
                </Form>
              </Fieldset>
            </Card>
          </Col>
        </Row>
      </Section>
      <Section>
          <Row>
            <Col md="6">
              <Card>
                <Fieldset title="Balance" value={data.balance}>
                 <Form>
                  <Form.Group className="mb-3">
                    <Form.Label><small className='text-muted'>Enter the withdrawal wallet</small> </Form.Label>
                      <Stack direction='horizontal' gap={3}>
                        <Form.Control type="text" required /> 
                        <Button variant='danger' type="submit">Withdraw</Button>
                      </Stack>
                    </Form.Group>
                  </Form>
                </Fieldset>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <Fieldset title="Presale Ends" value={data.endDate}>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label><small className='text-muted'>Change presale end date</small> </Form.Label>
                      <Stack direction='horizontal' gap={3}>
                        <Form.Control type="date" required /> 
                        <Button variant='info' type="submit">Modify</Button>
                      </Stack>
                    </Form.Group>
                  </Form>
                </Fieldset>
              </Card>
            </Col>
          </Row>
      </Section>
    </>
  )
}

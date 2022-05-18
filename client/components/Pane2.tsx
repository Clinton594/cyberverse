import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";
import Section from "./Section";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Card, Stack } from "react-bootstrap";
import { IStore } from "../redux/store";
import projectConfig from "../constants/project.config";
import { toggleStatus, defaultState } from "../libraries/adminEvents";
import { setStatus } from "../redux/contractReducer";
import { setToast } from "../redux/statusReducer";

export default function Pane2({ style }) {
  const [loading, toggleLoading] = useState(defaultState);
  const dispatch = useDispatch();
  const web3 = useWeb3React();
  const { presale, contract, status } = useSelector((store: IStore) => store);
  const contractStatus = projectConfig.status[contract.status];

  const triggerToggleStatus = () => {
    toggleLoading({ ...loading, status: true }); //start loading circle
    toggleStatus(web3, ({ status, data }) => {
      status && dispatch(setStatus(status)); // update the reducer
      toggleLoading({ ...loading, status: false }); // stop the loading circle
      dispatch(setToast(data)); //toast the response
    });
  };
  return (
    <>
      <Section>
        <Row>
          <Col md="6">
            <Card>
              <Fieldset title="Status" value={contractStatus} isLoading={loading.status}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Switch
                      onChange={triggerToggleStatus}
                      checked={contract.status}
                      disabled={loading.status}
                      label={`Turn ${projectConfig.status[!contract.status]} the presale`}
                    />
                  </Form.Group>
                </Form>
              </Fieldset>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Fieldset title="Rate" value={contract.rate} isLoading={false}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <small className="text-muted">Enter the presale rate</small>{" "}
                    </Form.Label>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control type="number" required />
                      <Button variant="success" type="submit">
                        Submit
                      </Button>
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
              <Fieldset title="Balance" value={contract.contractBalance} isLoading={false}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <small className="text-muted">Enter the withdrawal wallet</small>
                    </Form.Label>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control type="text" required />
                      <Button variant="danger" type="submit">
                        Withdraw
                      </Button>
                    </Stack>
                  </Form.Group>
                </Form>
              </Fieldset>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Fieldset title="Presale Ends" value={contract.enddate} isLoading={false}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <small className="text-muted">Change presale end date</small>
                    </Form.Label>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control type="date" required />
                      <Button variant="info" type="submit">
                        Modify
                      </Button>
                    </Stack>
                  </Form.Group>
                </Form>
              </Fieldset>
            </Card>
          </Col>
        </Row>
      </Section>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";
import Section from "./Section";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Card, Stack, Spinner } from "react-bootstrap";
import { Iresponse, IStore } from "../types";
import projectConfig from "../constants/project.config";
import { toggleStatus, defaultState, submitTokenRate, submitEndDate } from "../libraries/adminEvents";
import { setEnddate, setRate, setStatus } from "../redux/contractReducer";
import { setToast } from "../redux/statusReducer";

export default function Pane2({ style }) {
  const [loading, toggleLoading] = useState(defaultState);
  const dispatch = useDispatch();
  const web3 = useWeb3React();
  const { presale, contract, status } = useSelector((store: IStore) => store);
  const contractStatus = projectConfig.status[contract.status];

  const triggerToggleStatus = () => {
    toggleLoading({ ...loading, status: true }); //start loading circle
    toggleStatus(web3, ({ status, toast }: Iresponse) => {
      dispatch(setStatus(status)); // update the reducer
      toggleLoading({ ...loading, status: false }); // stop the loading circle
      dispatch(setToast(toast)); //toast the response
    });
  };

  const triggerSetRate = (e: any) => {
    e.preventDefault();
    const val = e.target[0].value;

    toggleLoading({ ...loading, rate: true }); //start loading circle
    submitTokenRate(web3, val, ({ status, toast, data }: Iresponse) => {
      if (status) {
        dispatch(setRate(data));
        e.target[0].value = "";
      }
      toggleLoading({ ...loading, rate: false }); // stop the loading circle
      dispatch(setToast(toast)); //toast the response
    });
  };

  const triggerEnddate = (e: any) => {
    e.preventDefault();
    const val = e.target[0].value;

    toggleLoading({ ...loading, enddate: true }); //start loading circle
    submitEndDate(web3, val, ({ status, toast, data }: Iresponse) => {
      if (status) {
        dispatch(setEnddate(data));
        e.target[0].value = "";
      }
      toggleLoading({ ...loading, enddate: false }); // stop the loading circle
      dispatch(setToast(toast)); //toast the response
    });
  };

  const triggerWithdraw = (e: any) => {
    e.preventDefault();
    const val = e.target[0].value;

    toggleLoading({ ...loading, withdraw: true }); //start loading circle
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
              <Fieldset
                title="Rate"
                value={new Intl.NumberFormat("en-IN").format(contract.rate)}
                isLoading={loading.rate}
              >
                <Form onSubmit={triggerSetRate}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <small className="text-muted">
                        Enter the {projectConfig.ticker} rate per {projectConfig.blockChainTokan}
                      </small>
                    </Form.Label>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control min={10} disabled={loading.rate} type="number" required placeholder="Eg : 1000" />
                      <Button disabled={loading.rate} variant="success" type="submit">
                        <Stack direction="horizontal" gap={2}>
                          Submit {loading.rate && <Spinner animation="border" size="sm" variant="warning" />}
                        </Stack>
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
              <Fieldset title="Balance" value={contract.contractBalance} isLoading={loading.withdraw}>
                <Form onSubmit={triggerWithdraw}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <small className="text-muted">Enter the withdrawal wallet</small>
                    </Form.Label>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control type="text" disabled={loading.withdraw} required />
                      <Button disabled={loading.withdraw} variant="danger" type="submit">
                        <Stack direction="horizontal" gap={2}>
                          Withdraw {loading.withdraw && <Spinner animation="border" size="sm" variant="warning" />}
                        </Stack>
                      </Button>
                    </Stack>
                  </Form.Group>
                </Form>
              </Fieldset>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Fieldset title="Presale Ends" value={contract.enddate} isLoading={loading.enddate}>
                <Form onSubmit={triggerEnddate}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <small className="text-muted">Change presale end date</small>
                    </Form.Label>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control defaultValue={contract.enddate} type="date" disabled={loading.enddate} required />
                      <Button disabled={loading.enddate} variant="info" type="submit">
                        <Stack direction="horizontal" gap={2}>
                          Modify {loading.enddate && <Spinner animation="border" size="sm" variant="warning" />}
                        </Stack>
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

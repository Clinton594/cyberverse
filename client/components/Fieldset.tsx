import React from "react";
import style from "../styles/Dashboard.module.css";
import { Spinner } from "react-bootstrap";

export default function Fieldset({ title, children, value, isLoading }) {
  return (
    <fieldset className={[style.fieldset].join(" ")}>
      <legend>
        {title} : {isLoading ? <Spinner size="sm" animation="grow" variant="primary" /> : <strong>{value}</strong>}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
}

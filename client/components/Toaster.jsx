import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setToast, defaultStatus } from "../redux/statusReducer";

export default function Toaster() {
  const dispatch = useDispatch();
  const { status: toast } = useSelector((store) => store);

  const variant = toast.status ? "success" : "danger";
  return (
    <Toast
      show={toast.show}
      // onClose={() => dispatch(setToast(defaultStatus))}
      delay={3000}
      autohide
      position="top-end"
      bg={variant}
    >
      <Toast.Header>
        <i className="fa fa-info"></i>
        <strong className="me-auto">{toast.title}</strong>
      </Toast.Header>
      <Toast.Body>{toast.message}</Toast.Body>
    </Toast>
  );
}

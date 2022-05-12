import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setToast, defaultStatus } from "../redux/statusReducer";

export default function Toaster() {
  const dispatch = useDispatch();
  const { status: toast } = useSelector((store) => store);

  const variant = toast.status ? "success" : "danger";
  const icon = toast.status ? "check" : "ban";
  return (
    <Toast
      show={toast.show}
      onClose={() => dispatch(setToast(defaultStatus))}
      delay={3000}
      autohide
      position="top-end"
      bg={variant}
      style={{ position: "absolute", right: 0 }}
    >
      <Toast.Header>
        <i className={`fas fa-${icon} me-2`}></i>
        <strong className="me-auto">{toast.title}</strong>
      </Toast.Header>
      <Toast.Body>{toast.message}</Toast.Body>
    </Toast>
  );
}

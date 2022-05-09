import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/Home.module.css";

export default function Footer() {
  const router = useRouter();
  const routes = {
    path: router.pathname == "/" ? "/dashboard" : "/",
    text: router.pathname == "/" ? "Admin Dashboard" : "Back to Home",
  };
  return (
    <footer className={style.footer}>
      <Link href={routes.path}>{routes.text}</Link>
    </footer>
  );
}

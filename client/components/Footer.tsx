import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { IStore } from "../types";

export default function Footer() {
  const { presale } = useSelector((store: IStore) => store);
  const router = useRouter();
  const routes = {
    path: router.pathname == "/" ? "/dashboard" : "/",
    text: router.pathname == "/" ? "Admin Dashboard" : "Back to Home",
  };
  return <footer className={style.footer}>{presale.isAdmin && <Link href={routes.path}>{routes.text}</Link>}</footer>;
}

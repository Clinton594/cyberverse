import React from 'react'
import Link from "next/link"
import {useSelector} from "react-redux"
import style from "../styles/Home.module.css"
import {IStore} from "../redux/store"


export default function Footer() {
  const {presale} = useSelector((store:IStore)=>store);

  return (
    <footer className={style.footer}>
      <Link href="/dashboard"> Admin Dashboard</Link> 
      <br/>
      <span>{presale.wallet}</span>
    </footer>
  )
}

import React from 'react'
import style from '../styles/Dashboard.module.css'

export default function Fieldset({title, children, value}) {
  return (
   <fieldset className={[style.fieldset].join(" ")}>
     <legend> {title} : <strong>{value}</strong> </legend>
     <div>
       {children}
     </div>
   </fieldset>
  )
}

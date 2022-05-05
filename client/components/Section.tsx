import React from 'react'

export default function Section(props) {
  return (
    <section className={['my-5', props.className].join(" ")}>
      {props.children}
    </section>
  )
}

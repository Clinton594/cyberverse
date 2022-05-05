import React from 'react'
import Head from 'next/head'
import projectConfig from '../constants/project.config'

export default function HtmlHead() {
  return (
    <Head>
      <title>{projectConfig.name}</title>
      <meta name="description" content={projectConfig.description} />
      <meta name="keywords" content={projectConfig.keywords} />
      <link rel="icon" href={projectConfig.favicon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
    </Head>
  )
}

import React from 'react';
import Head from 'next/head';
import App from '../src/app/App.js';

import globalStyles from '../src/styles/globals.styles.js';
import indexStyles from '../src/styles/index.styles.js';

export default function Rejection() {
  return (
    <div className="container">
      <style jsx>
        {globalStyles}
      </style>
      <style jsx>
        {indexStyles}
      </style>
      <Head>
        <title>Rejection</title>
        <meta name="Rejection" content="You have to lose to win" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../src/components/Button/Button.js';
import globalStyles from '../src/styles/globals.styles.js';
import indexStyles from '../src/styles/index.styles.js';

export default function Index() {
  const router = useRouter();
  
  const handleAnonymousOnClick = () => {
    router.push('/rejection');
  };

  return (
    <div className="container">
      <style jsx>
        {globalStyles}
      </style>
      <style jsx>
        {indexStyles}
      </style>
      <div className="login-page">
        <div className="top-matter">          
          <h1 className="cursive">In the game of</h1>
          <h2 className="title">Rejection</h2>
          <h4 className="subtitle">You gotta lose to win</h4>
          <span className="centered">
            <Button title="Let's Play" buttonType="anonymous" onClick={handleAnonymousOnClick} />
          </span>
        </div>
      </div>
    </div>
  )
}

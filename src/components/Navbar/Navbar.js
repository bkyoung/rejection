import React from 'react';
import { useSelector } from 'react-redux';
import Score from '../Score/Score.js';
import User from '../User/User.js';
import { getScore } from '../../features/rejection/rejectionSlice';
import NavbarStyles from './Navbar.styles.js';

const Navbar = ({ title, subtitle, user }) => {
  const score = useSelector((state) => getScore(state));
  return (
    <>
      <style jsx>
        {NavbarStyles}
      </style>
      <div className="navbar-container">
        <div className="navbar-title">          
          <h2 className="title">{ title }.</h2>
          <h5 className="subtitle">{ subtitle }.</h5>
        </div>
        <Score score={score} />
        <User user={user} />
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { useSelector } from 'react-redux';
import Score from '../Score/Score.js';
import User from '../User/User.js';
import { getScore } from '../../features/question/questionSlice';
import { getUser } from '../../features/user/userSlice.js';
import NavbarStyles from './Navbar.styles.js';

const Navbar = () => {
  const score = useSelector((state) => getScore(state));
  const user = useSelector((state) => getUser(state));
  return (
    <>
      <style jsx>
        {NavbarStyles}
      </style>
      <div className="navbar-container">
        <User user={user} />
        <Score score={score} />
      </div>
    </>
  );
};

export default Navbar;

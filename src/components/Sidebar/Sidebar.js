import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconLogin, IconLogout, IconHelp, IconSquarePlus } from '@tabler/icons';
import AddQuestion from '../AddQuestion/AddQuestion.js';
import Rules from '../Rules/Rules.js';
import { signInWithGooglePopup, signOutUser } from '../../services/firebase.js';
import { createQuestion } from '../../features/rejection/rejectionSlice.js';
import { isLoggedIn, setUser, unsetUser } from '../../features/user/userSlice.js';
import SidebarStyles from "./Sidebar.styles.js";

const SidebarItem = ({ icon, size, stroke, ...props }) => {
  const { className, ...otherProps } = props
  const defaultClassNames = ["sidebar-item"]
  const classNames = defaultClassNames.concat([className]).join(' ')
  return (
    <div className={classNames} {...otherProps}>
      {React.createElement(icon, { size:size, stroke:stroke })}
    </div>
  );
}

const Sidebar = ({ user }) => {
  const [open, setOpen] = useState(false)
  const [rulesModalOpen, setRulesModalOpen] = useState(false);

  const handleAddModalOpen = () => setOpen(true);
  const handleAddModalClose = () => setOpen(false);

  const handleRulesModalOpen = () => setRulesModalOpen(true);
  const handleRulesModalClose = () => setRulesModalOpen(false);
  
  const dispatch = useDispatch();
  const addNewQuestion = ({ question, askee }) => dispatch(createQuestion({ question, askee }));

  const logInUser = ({ id, displayName, email, photoURL }) => dispatch(setUser({ id, displayName, email, photoURL }));
  const logOutUser = () => dispatch(unsetUser());
  const loggedIn = useSelector((state) => isLoggedIn(state));

  const handleLogin = async () => {
    try {
      const u = await signInWithGooglePopup();
      const { user } = u
      const { uid, displayName, email, photoURL } = user
      logInUser({ id: uid, displayName, email, photoURL });
      console.log({ uid, displayName, email, photoURL })
    } catch (error) {
      console.log(error);
      alert('There was a problem with log in.  Continuing as Anonymous.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      logOutUser();
    } catch (error) {
      console.log(error);
    }
  };

  const icon = {
    true: {
      icon: IconLogout,
      onClick: handleLogout,
      label: 'Log out',
      className: 'logout',
    },
    false: {
      icon: IconLogin,
      onClick: handleLogin,
      label: 'Log in',
      className: 'login',
    }
  }

  return (
    <>
      <style jsx>
        {SidebarStyles}
      </style>
      <div className="sidebar-container">
        <span>
          <SidebarItem
            key={0}
            icon={IconSquarePlus}
            size={36}
            stroke={2.25}
            onClick={handleAddModalOpen}
            className="add-question"
          />
          <p className="sidebar-item-label">New</p>
          <AddQuestion open={open} handleClose={handleAddModalClose} dispatch={addNewQuestion} />
        </span>
        <span>
          <SidebarItem
            key={1}
            icon={IconHelp}
            size={36}
            stroke={2.25}
            onClick={handleRulesModalOpen}
            className="rules"
          />
          <Rules open={rulesModalOpen} handleClose={handleRulesModalClose} />
          <p className="sidebar-item-label">Rules</p>
          <br />
          <SidebarItem
            key={2}
            size={36}
            stroke={2.25}
            user={user}
            {...icon[loggedIn]}
          />
          <p className="sidebar-item-label">{icon[loggedIn]['label']}</p>
        </span>
      </div>
    </>
  );
}

export default Sidebar;

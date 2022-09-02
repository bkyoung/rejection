import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconLogin, IconLogout, IconHelp, IconSquarePlus } from '@tabler/icons';
import AddQuestion from '../AddQuestion/AddQuestion.js';
import Rules from '../Rules/Rules.js';
import {
  signInWithGooglePopup,
  signOutUser,
} from '../../services/firebase.js';
import {
  clearQuestions,
  createQuestion,
} from '../../features/question/questionSlice.js';
import { getUser, isLoggedIn, setUser, unsetUser } from '../../features/user/userSlice.js';
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
};

const Sidebar = () => {
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [rulesModalOpen, setRulesModalOpen] = useState(false);

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => isLoggedIn(state));
  const user = useSelector(state => getUser(state));
  
  const addNewQuestion = async ({ question, askee }) => {
    dispatch(createQuestion({ question, askee }));
  }
  const logInUser = async ({ uid, displayName, email, photoURL }) => dispatch(setUser({ uid, displayName, email, photoURL }));
  const logOutUser = () => {
    dispatch(unsetUser());
    dispatch(clearQuestions());
  }

  const handleAddModalOpen = () => setAddModalOpen(true);
  const handleAddModalClose = () => setAddModalOpen(false);
  const handleRulesModalOpen = () => setRulesModalOpen(true);
  const handleRulesModalClose = () => setRulesModalOpen(false);
  const handleLogin = async () => {
    try {
      const u = await signInWithGooglePopup();
      const { user } = u
      const { uid, displayName, email, photoURL } = user
      logInUser({ uid, displayName, email, photoURL });
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
        <div className="top-matter">
          <SidebarItem
            key={0}
            icon={IconSquarePlus}
            size={32}
            stroke={2}
            onClick={handleAddModalOpen}
            className="add-question"
          />
          <p className="sidebar-item-label">New</p>
          <AddQuestion open={addModalOpen} handleClose={handleAddModalClose} dispatch={addNewQuestion} />
        </div>
        <div className="bottom-matter">
          <SidebarItem
            key={1}
            icon={IconHelp}
            size={32}
            stroke={2}
            onClick={handleRulesModalOpen}
            className="rules"
          />
          <Rules open={rulesModalOpen} handleClose={handleRulesModalClose} />
          <p className="sidebar-item-label">Rules</p>
          <br />
          <SidebarItem
            key={2}
            size={32}
            stroke={2}
            user={user}
            {...icon[loggedIn]}
          />
          <p className="sidebar-item-label">{icon[loggedIn]['label']}</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

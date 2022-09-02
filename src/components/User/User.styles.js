import css from 'styled-jsx/css';

export default css`
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .name {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0.75rem;
    font-weight: 900;
    letter-spacing: -0.025em;
  }

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    width: 32px;
    height: 32px;
  }
`;
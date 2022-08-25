import css from 'styled-jsx/css';

export default css`
    .navbar-container {
      margin: 0;
      padding: 10px 24px;
      height: 48px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(1, 111, 243, 0.9);
      color: white;
    }

    .navbar-title {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    .title {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 900;
      letter-spacing: -0.025em;
    }

    .subtitle {
      margin-top: 0;
      margin-bottom: 3px;
      margin-left: 8px;
      font-size: 0.75em;
      font-weight: 300;
      letter-spacing: -0.025em;
    }
`;

import css from 'styled-jsx/css';

export default css`
    .buttonContainer {
      margin: 0;
      padding: 0;
    }
    
    .default button {
      background-color: #0070f3;
      color: white;
      border: 1px solid #0070f3;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      padding: 10px 61px;
    }

    .acceptRejectButtonGroup {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
    }

    .updateQuestion {
      color: white;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      padding: 6px 10px;
      margin-right: 16px;
    }

    .acceptQuestion {
      background-color: green;
      border: 1px solid green;
    }

    .rejectQuestion {
      background-color: red;
      border: 1px solid red;
    }
`;

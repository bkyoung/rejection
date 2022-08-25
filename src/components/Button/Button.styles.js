import css from 'styled-jsx/css';

export default css`
    .buttonContainer {
      margin: 0;
      padding: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .default {
      background-color: rgba(1, 111, 243, 0.9);
      color: white;
      border: 1px solid #ABB2B9;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      padding: 12px 70px;
    }

    .inverted {
      background-color: white;
      color: rgba(1, 111, 243, 0.9);
      border: 1px solid rgba(1, 111, 243, 0.9);
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      padding: 12px 70px;
    }

    .anonymous {
      background-color: white;
      color: rgba(1, 111, 243, 0.9);
      border: 1px solid rgba(1, 111, 243, 0.9);
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      padding: 12px 56px;
    }

    .acceptRejectButtonGroup {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
      box-shadow: none;
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

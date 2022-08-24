import css from 'styled-jsx/css';

export default css`
    .questions {
      border: 1px solid #ABB2B9 ;
      border-radius: 6px;
      width: 80%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 15px 0 rgba(0, 0, 0, 0.15);
    }

    .questions-header {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      border-bottom: 1px solid #ddd;
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: #0070f3;
      color: white;
      font-size: 14px;
      font-weight: 500;
      padding: 12px;
    }

    .header-block {
      padding-left: 8px;
      flex-grow: 1;
    }

    .p25 {
      width: 25%;
    }

    .w125 {
      width: 125px;
      flex-grow: 0;
    }

    .w175 {
      width: 175px;
      flex-grow: 0;
    }
`;

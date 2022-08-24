import css from 'styled-jsx/css';

export default css`
    .question-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 12px;
      font-size: 14px;
    }

    .question-container:hover {
      background-color: #F5F5F5;
    }

    .last {
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    
    .question-item {
      padding-left: 8px;
      padding-top: 6px;
      padding-bottom: 6px;
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

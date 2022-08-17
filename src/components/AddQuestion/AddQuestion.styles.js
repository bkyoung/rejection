import css from 'styled-jsx/css';

export default css`
    .addQuestionContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .modalHide {
      display: none;
    }

    .modalShow {
      display: block;
    }

    .addQuestionModalContainer {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    .addQuestionModal {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
      margin-top: 20rem;
      padding: 2rem;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .addQuestionModal form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .addQuestionModal form input {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 12px;
    }
`;

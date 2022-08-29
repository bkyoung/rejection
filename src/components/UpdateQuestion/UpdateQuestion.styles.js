import css from 'styled-jsx/css';

export default css`
    .updateQuestionContainer {
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

    .updateQuestionModalContainer {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.5);
    }
    .updateQuestionModal {
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

    .updateQuestionModal form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .updateQuestionModal form input, select {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 12px;
    }

    .close-button {
      color: black;
      align-self: flex-end;
      margin-bottom: 1em;
    }
`;

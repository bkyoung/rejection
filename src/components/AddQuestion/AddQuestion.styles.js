import css from 'styled-jsx/css';

export default css`
    .addQuestionContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
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
      background-color: rgba(0,0,0,0.6);
    }
    .addQuestionModal {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
      margin-top: 20rem;
      padding: 1rem;
      background: white;
      border: 1px solid #ddd;
      border-radius: .25em;
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
      border-radius: .25em;
      padding: .75em;
    }

    .close-button {
      color: black;
      align-self: flex-end;
      margin-bottom: 1em;
    }
`;

import css from 'styled-jsx/css';

export default css`
  .rules-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rules-modal-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,0.6);
  }

  .rules-modal {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin: auto;
    margin-top: 10rem;
    padding: 2em;
    color: black;
    background: white;
    border: 1px solid #ABB2B9 ;
    border-radius: 6px;
  }

  .close-button {
    align-self: flex-end;
  }

  .close {
    display: none;
  }

  .open {
    display: block;
  }
`;

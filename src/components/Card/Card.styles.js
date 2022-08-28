import css from 'styled-jsx/css';

export default css`
    .cardContainer {
      padding: 2em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #ABB2B9 ;
      border-radius: 6px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 15px 0 rgba(0, 0, 0, 0.15);
      transition: all .2s ease-in-out;
    }

    hr {
      border-top: 1px solid rgba(0, 0, 0, 1);
      margin-top: 0;
      margin-bottom: 2em;
    }

    .cardContainer:hover {
      transform: scale(1.02); 
    }

    .cardTitle {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 600;
    }

    .cardSubtitle {
      margin-top: .5em;
      margin-bottom: .5em;
      font-weight: 500;
    }

    .cardField {
      width: 100%;
      display: inline-flex;
      margin-bottom: .5em;
    }

    .cardField * {
      margin-top: 0;
      margin-bottom: 0;
      justify-content: baseline;
    }

    .fieldName {
      font-weight: 600;
      text-transform: capitalize;
    }

    .fieldValue {
      font-weight: 400;
      margin-left: 1em;
    }

    .rejected {
      background-color: rgba(255,0,0, .2);
    }

    .accepted {
      background-color: rgba(11,156,49, .2);
    }

    .update {
      display: flex;
      justify-content: center;
    }
`;

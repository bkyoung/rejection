import css from 'styled-jsx/css';

export default css`
    .questions-grid {
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 23%));
      grid-template-rows: repeat(auto-fit, minmax(300px, 23%));
      grid-gap: 2rem;
    }

    .no-questions {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: rgba(0, 0, 0, .1);
    }

    .hint {
      margin-top: 2.25rem;
      margin-left: 1rem;
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: -0.05rem;
    }

    .nothing-to-display {
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: -0.15rem;
      margin: auto;
    }
`;

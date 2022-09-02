import css from 'styled-jsx/css';

// .questions-grid {
//   padding: 2rem;
//   display: grid;
//   grid-template-columns: repeat(auto, minmax(300px, 300px));
//   grid-gap: 2rem;
// }

export default css`
    .questions-grid {
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
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

    .nothing-to-display {
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: -0.15rem;
      margin: auto;
    }
`;

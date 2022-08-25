import css from 'styled-jsx/css';

export default css`
      .app-container {
          display: flex;
          flex-direction: column;
          justify-content: flext-start;
          width: 100%;
          height: 100vh;
      }

      .app-grid {
        display: grid;
        grid-template-columns: 80px 1fr;
        grid-column-gap: 0;
      }

      .app-content {
        display: flex;
        background-color: rgba(248,248,248, 1);
      }   
`;

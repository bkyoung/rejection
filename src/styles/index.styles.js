import css from 'styled-jsx/css';

export default css`
  .container {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
  }

  .login-page {
    margin: 0;
    padding: 2rem;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(1, 111, 243, 0.9);
    color: #FFFFFF;
  }

  .top-matter {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  .cursive {
    text-align: center;
    font-size: 5rem;
    font-family: 'Stalemate', cursive;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
  }

  .title{
    text-align: center;
    font-size: 5rem;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: -0.15rem;
  }

  .subtitle {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: 1rem;
  }

  .login-options {
    padding-bottom: 4rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  .centered {
    margin-top: 20%;
  }
`;
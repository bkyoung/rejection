import css from 'styled-jsx/css';

export default css`
    .sidebar-container {
      padding: 2em .5em;
      height: calc(100vh - 48px);
      width: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(1, 111, 243, 0.9);
      border-right: 1px solid #ABB2B9;
      color: white;
    }

    .sidebar-item {
      display: flex;
    }

    .sidebar-item-label {
      margin-top: 0;
      font-size: 0.75em;
      font-weight: 700;
      letter-spacing: -0.025em;
      text-align: center;
    }

    .tooltip {
      position: relative;
    }
    
    .tooltip::before {
      content: attr(tooltip-text);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 100%;
      margin-left: 15px;
      width: 200px;
      padding: 10px;
      border-radius: 10px;
      background: rgba(0, 0, 0, .6);
      color: #FFFFFF;
      text-align: center;
      display: none;
    }
    
    .tooltip::after {
      content: "";
      position: absolute;
      left: 100%;
      margin-left: -5px;
      top: 50%;
      transform: translateY(-50%);
      border: 10px solid rgba(0, 0, 0, .6);
      border-color: transparent rgba(0, 0, 0, .6) transparent transparent;
      display: none;
    }
    
    .tooltip:hover::before, .tooltip:hover::after {
      display: block;
    }
`;

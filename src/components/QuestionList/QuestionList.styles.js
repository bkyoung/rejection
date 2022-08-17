import css from 'styled-jsx/css';

export default css`
    .questions {
      border: 1px solid #ddd;
      border-radius: 4px;
      border-spacing: 0;
      width: 80%;
    }

    .questions table {
      border-collapse: collapse;
      border: 1px solid #ddd;
      border-radius: 4px;
      border-spacing: 0;
      width: 100%;
    }
    
    .questions thead>tr:first-child>:first-child { border-top-left-radius: 4px; }
    .questions thead>tr:first-child>:last-child { border-top-right-radius: 4px; }
    .questions tbody>tr:last-child>:first-child { border-bottom-left-radius: 4px; }
    .questions tbody>tr:last-child>:last-child { border-bottom-right-radius: 4px; }
    
    .questions tr {
      line-height: 2.5em;
    }
    .questions th {
      line-height: 2.5em;
      padding: 8px;
    }

    .questions td {
      padding: 8px;
    }

    .questions tr:nth-child(even){background-color: #f2f2f2;}
    
    .questions tr:hover {background-color: #ddd;}
    
    .questions th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #0070f3;
      color: white;
    }
`;

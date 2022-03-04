import style from 'styled-components';

const CsvContent = style.div`
  display: flex;
  flex-direction: column;

  label {
    background-color: white;
    display: flex;
    border: solid 1px black;
    width: auto;
  }

  input {
    align-self: center;
    width: 10vh;
    height: 25h;
    margin: 0 20px;
  }

`;

export default CsvContent;

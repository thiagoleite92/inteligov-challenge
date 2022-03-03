import style from 'styled-components';

const LoadFile = style.section`
  width: 50vh;
  margin: auto;
  
  div {
    display: flex;
  }

  span {
    padding: 5px;
    width: 50vh;
    text-align: center;
    border: solid 1px black;
  }

  div > div:nth-child(1) {
    background-color: green;
  }

  div > div:last-child  {
  {
    background-color: green;
  }


`;

export default LoadFile;

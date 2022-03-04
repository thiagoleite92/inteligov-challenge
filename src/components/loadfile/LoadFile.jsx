import style from 'styled-components';

const LoadFile = style.section`
  display: flex;
  width: 100vh;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 30px;

  button {
    margin-top: 20px;
  }

  div {
    display: flex;
    width: 100vh;
    margin: 0 auto;
  }
  
  span {
    width: 100%;
    padding: 10px 4px;
    text-align: center;
    border: solid 1px black;
  }

  div > div:nth-child(1) {
    background-color: #019973;
    text-transform: uppercase;
  }

  div > div:nth-child(2n + 2) {
    background-color: #AFE1AF;
  }

  div > div:nth-child(2n + 3) {
    background-color: #C1E1C1;
  }

  div > div:last-child {
  {
    background-color: #019973;
    height: 25px;
  }


`;

export default LoadFile;

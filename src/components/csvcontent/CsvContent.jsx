import style from 'styled-components';

const CsvContent = style.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    background-color: #EEDC82;
  }

  .btn__btn-del {
    background-color: red;
  }

  .add-row {
    padding: 10px;
    border: solid 1px black;
    margin-top: 50px
  }

  .add-row button {
    width: 50px
    height: 100%;
  }

  .add-row button:hover {
    background-color: green;
    cursor: pointer;
  }
`;

export default CsvContent;

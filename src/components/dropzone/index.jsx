import style from 'styled-components';

const DropZone = style.div`
  border: 2px solid black;
  width: 500px;
  height: 50px;
  background-color: #f8f8f8;
  margin: 20px auto;
  padding: 70px 0;
  text-align: center;

  &:hover {
    background-color: rgba(15, 255, 80, 0.3);
    border: 2px solid green;
  }
`;

export default DropZone;

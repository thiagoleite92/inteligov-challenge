import style from 'styled-components';

const DropZone = style.div`
  border: 1px solid black;
  width: 500px;
  background-color: #8cc140;
  margin: 30px auto;
  padding: 50px 0;
  text-align: center;
  text-transform: uppercase;
  color: #1f2418;

  &:hover {
    background-color: rgba(15, 255, 80, 0.3);
    border: 2px solid green;
    cursor: pointer;
  }
`;

export default DropZone;

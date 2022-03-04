import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import createEmptyRow from '../../utils/newRow';

// eslint-disable-next-line react/prop-types
function AddNewRow({ setNewRender }) {
  const { globalFileContent, setGlobalFileContent } = useContext(MainContext);

  const addNewRow = () => {
    const mountedRow = createEmptyRow(globalFileContent.data[0].length);
    globalFileContent.data.push(mountedRow);
    setGlobalFileContent(globalFileContent);
    console.log(globalFileContent.data);
    setNewRender((oldState) => oldState + 1);
  };

  return (
    <div>
      <span />
      <label htmlFor="blank-row">
        <input
          type="button"
          name="blank-row"
          className="blank-row"
          onClick={addNewRow}
          value="ADD ROW"
        />
      </label>
    </div>
  );
}

export default AddNewRow;

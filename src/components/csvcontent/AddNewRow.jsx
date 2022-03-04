import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../../context/MainContext';
import createEmptyRow from '../../utils/newRow';

function AddNewRow({ newRender, setNewRender }) {
  const { globalFileContent, setGlobalFileContent } = useContext(MainContext);

  const addNewRow = () => {
    const mountedRow = createEmptyRow(globalFileContent.data[0].length);
    globalFileContent.data.push(mountedRow);
    setGlobalFileContent(globalFileContent);
    setNewRender(newRender + 1); // Changing father state to force new render
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

AddNewRow.propTypes = {
  setNewRender: PropTypes.func,
  newRender: PropTypes.number,
}.isRequired;

export default AddNewRow;

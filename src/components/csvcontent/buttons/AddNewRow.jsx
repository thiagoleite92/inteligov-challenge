import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../../../context/MainContext';
import { createEmptyRow } from '../../../utils';

function AddNewRow({ newRender, setNewRender }) {
  const { globalFileContent, setGlobalFileContent } = useContext(MainContext);

  const addNewRow = () => {
    const mountedRow = createEmptyRow(globalFileContent[0].data.length);
    globalFileContent.push(mountedRow);
    setGlobalFileContent(globalFileContent);
    setNewRender(newRender + 1); // Changing father state to force new render
  };

  return (
    <button
      type="button"
      onClick={addNewRow}
    >
      ADD ROW
    </button>
  );
}

AddNewRow.propTypes = {
  setNewRender: PropTypes.func,
  newRender: PropTypes.number,
}.isRequired;

export default AddNewRow;

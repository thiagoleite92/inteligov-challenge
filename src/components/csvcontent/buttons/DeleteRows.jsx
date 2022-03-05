/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';

function DeleteRows({ setNewRender, newRender }) {
  const { selectedRows, globalFileContent, setGlobalFileContent } = useContext(MainContext);

  const handleDelete = () => {
    const sortedPositions = selectedRows.sort((pos) => {
      if (pos < 1) return -1;
      if (pos > 1) return 1;
      return 0;
    });
    selectedRows.forEach((pos) => {
      globalFileContent.data.splice(pos, 1);
    });
    console.log(globalFileContent.data);
    setGlobalFileContent(globalFileContent);
    setNewRender(newRender + 1);
  };

  return (
    <button type="button" onClick={handleDelete}>Delete Sected Rows</button>
  );
}

export default DeleteRows;

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';
import { findIndexPos } from '../../../utils';

function DeleteRows({ newRender, setNewRender }) {
  const {
    selectedRows,
    globalFileContent,
    setGlobalFileContent,
    setSelectedRows,
  } = useContext(MainContext);

  const handleDeletes = () => {
    selectedRows.forEach((id) => {
      const position = findIndexPos(globalFileContent, id);
      globalFileContent.splice(position, 1);
      document.querySelector(`#${id}`).style.backgroundColor = '';
    });
    setGlobalFileContent(globalFileContent);
    setSelectedRows([]);
    setNewRender(newRender + 1);
  };

  return (
    <button type="button" onClick={handleDeletes}>DeleteRows</button>
  );
}

export default DeleteRows;

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';
import { findIndexPos } from '../../../utils';

function DeleteRow({ id }) {
  const {
    globalFileContent,
    setGlobalFileContent,
  } = useContext(MainContext);

  const handleDelete = () => {
    const tempArray = globalFileContent.slice();
    const position = findIndexPos(globalFileContent, id);
    tempArray.splice(position, 1);
    setGlobalFileContent(tempArray);
  };

  return (
    <button type="button" onClick={handleDelete}>DEL</button>
  );
}

export default DeleteRow;

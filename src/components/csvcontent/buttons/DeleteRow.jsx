import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
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
    <button type="button" onClick={handleDelete} className="btn__btn-del">
      <MdDelete />
    </button>
  );
}

DeleteRow.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default DeleteRow;

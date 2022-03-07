import React from 'react';
import { nanoid } from 'nanoid';
import { AiOutlineEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { DeleteRow } from './buttons';

function RenderRows({ data, id, setEnableEditRow }) {
  return (
    <div>
      {
      data.map((cell) => (
        <span key={nanoid()}>{cell}</span>
      ))
      }
      <button type="button" onClick={() => setEnableEditRow(id)}>
        <AiOutlineEdit />
      </button>
      <DeleteRow id={id} />
    </div>
  );
}

RenderRows.propTypes = {
  id: PropTypes.number,
  setEnableEditRow: PropTypes.func,
  data: PropTypes.array,
}.isRequired;

export default RenderRows;

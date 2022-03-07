/* eslint-disable react/prop-types */
import React from 'react';
import { nanoid } from 'nanoid';
import { AiOutlineEdit } from 'react-icons/ai';
import { DeleteRow } from './buttons';

function RenderRows({ data, id, setEnableEditRow }) {
  return (
    <div
      key={nanoid()}
    >
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

export default RenderRows;

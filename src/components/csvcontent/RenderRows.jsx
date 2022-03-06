/* eslint-disable react/prop-types */
import React from 'react';
import { nanoid } from 'nanoid';
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
      <button type="button" onClick={() => setEnableEditRow(id)}>EDIT</button>
      <DeleteRow id={id} />
    </div>
  );
}

export default RenderRows;

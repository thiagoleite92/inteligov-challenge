/* eslint-disable react/prop-types */
import React from 'react';

function RenderRows({ row }) {
  return (
    <div key={row}>
      {
            row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))
            }
      <label htmlFor="select-row">
        <input type="checkbox" name="select-row" />
      </label>
    </div>
  );
}

export default RenderRows;

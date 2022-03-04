/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function RenderRows({ row }) {
  const [select, setSelect] = useState(false);

  return (
    <div
      role="button"
      key={row}
      onClick={() => setSelect(!select)}
      tabIndex={0}
      onKeyUp
      style={{ backgroundColor: select ? '#EEDC82' : '' }}
    >
      {
      row.map((cell) => (
        <span key={cell}>{cell}</span>
      ))
      }
    </div>
  );
}

export default RenderRows;

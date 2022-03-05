import React, { useState } from 'react';
import CsvContent from './CsvContent';
import RenderRows from './RenderRows';
import { DeleteRows, AddNewRow } from './buttons';

function index({ globalFileContent: { data } }) {
  const [newRender, setNewRender] = useState(0);

  return (
    <CsvContent>
      {data.map((row, pos) => (
        <RenderRows
          row={row}
          pos={pos}
        />
      ))}
      <div>
        <AddNewRow newRender={newRender} setNewRender={setNewRender} />
        <DeleteRows />
      </div>
    </CsvContent>
  );
}

export default index;

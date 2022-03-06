import React, { useState } from 'react';
import CsvContent from './CsvContent';
import RenderRows from './RenderRows';
import { DeleteRows } from './buttons';

function index({ globalFileContent }) {
  const [newRender, setNewRender] = useState(0);
  return (
    <CsvContent>
      {globalFileContent.map(({ data, id, selected }) => (
        <RenderRows
          data={data}
          id={id}
          selected={selected}
        />
      ))}
      <div>
        {/* <AddNewRow newRender={newRender} setNewRender={setNewRender} /> */}
        <DeleteRows newRender={newRender} setNewRender={setNewRender} />
      </div>
    </CsvContent>
  );
}

export default index;

import React, { useState } from 'react';
import CsvContent from './CsvContent';
import RenderRows from './RenderRows';
import { DeleteRows, AddNewRow } from './buttons';

function index({ globalFileContent }) {
  const [newRender, setNewRender] = useState(0);

  return (
    <CsvContent>
      {globalFileContent.map(({ data, id }) => (
        <RenderRows
          data={data}
          id={id}
        />
      ))}
      <div>
        <AddNewRow newRender={newRender} setNewRender={setNewRender} />
        <DeleteRows newRender={newRender} setNewRender={setNewRender} />
      </div>
    </CsvContent>
  );
}

export default index;

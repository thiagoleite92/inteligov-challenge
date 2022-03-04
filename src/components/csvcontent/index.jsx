import React, { useState } from 'react';
import CsvContent from './CsvContent';
import AddNewRow from './AddNewRow';
import RenderRows from './RenderRows';

function index({ globalFileContent: { data } }) {
  const [newRender, setNewRender] = useState(0);

  return (
    <CsvContent>
      {data.map((row) => <RenderRows row={row} />)}
      <AddNewRow newRender={newRender} setNewRender={setNewRender} />
    </CsvContent>
  );
}

export default index;

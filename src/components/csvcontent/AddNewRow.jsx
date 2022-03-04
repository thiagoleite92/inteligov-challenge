import React from 'react';

function AddNewRow() {
  return (
    <div>
      <span />
      <label htmlFor="blank-row">
        <input
          type="button"
          name="blank-row"
          className="blank-row"
          onClick={() => console.log('oi')}
          value="ADD ROW"
        />
      </label>
    </div>
  );
}

export default AddNewRow;

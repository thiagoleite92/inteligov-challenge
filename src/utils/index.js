function createEmptyRow(length) {
  const mountedNewRow = [];
  for (let i = 0; i < length; i += 1) {
    mountedNewRow.push('');
  }

  return mountedNewRow;
}

function findIndexPos(arrayOfPos, pos) {
  const position = arrayOfPos.indexOf(pos);
  return position;
}

export {
  createEmptyRow,
  findIndexPos,
};

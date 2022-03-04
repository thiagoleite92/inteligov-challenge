function createEmptyRow(length) {
  const mountedNewRow = [];
  for (let i = 0; i < length; i += 1) {
    mountedNewRow.push('');
  }

  return mountedNewRow;
}

export default createEmptyRow;

function isValidInteger(n) {
    if (typeof n === 'boolean' ||
      !isFinite(n) ||
      !Number.isInteger(Number(n)) ||
      Number(n) < 0 )
      throw new TypeError(`${n} is invalid`);
  }
  function prefill(n, v) {
    isValidInteger(n);
    const array = [];
    array.length = n;
    array.fill(v); 
    return array;
  }
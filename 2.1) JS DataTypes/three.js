// Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  const choice = {
    '+': value1+value2,
    '-': value1-value2,
    '*': value1*value2,
    '/': value1/value2
  };
  return choice[operation];
}

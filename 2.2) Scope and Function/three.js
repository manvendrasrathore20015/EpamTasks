// parition on 
const isEven = n => n % 2 === 0;
const testArray = [1, 2, 3, 4, 5, 6];
const partitionOn = (predicate, items) => {
  const negativeFiltred = items.filter(item => !predicate(item));
  const positiveFiltred = items.filter(item => predicate(item));

  items.splice(0);
  items.push(...negativeFiltred).push(...positiveFiltred);
  return negativeFiltred.length;
};
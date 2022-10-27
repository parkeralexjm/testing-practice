export default function analyse(input) {
  
  const min = Math.min(...input);
  const max = Math.max(...input);
  const length = input.length;
  const average = (input.reduce((a,b) => a + b) / length);
  const newResult = new Object(average, min, max, length)
  return newResult;
}

class Object {
  constructor(average, min, max, length) {
    this.average = average,
      this.min = min,
      this.max = max,
      this.length = length;
  }
}
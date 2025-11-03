function fibs(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }

  return arr;
}

function fibsRec(num) {
  console.log("This was printed recursively");

  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const arr = fibsRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibs(8));
console.log(fibsRec(8));

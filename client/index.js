function solution(A) {
  let unique = new Set(A);
  let arr = [...unique];
  arr.sort((a, b) => a - b);
  arr = arr.filter((a) => a > 0);
  if (arr.length > 0) {
    const max = arr[arr.length - 1];
    const range = Array.from({ length: max }, (_, i) => i + 1);
    const intersect = range.filter((a) => !arr.includes(a));

    return intersect.length > 0 ? intersect[0] : 1;
  } else return 1;
}

const result = solution([-1, -3]);
console.log(result);

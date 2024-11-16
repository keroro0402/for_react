const array: number[] = [1, 2, 3, 4, 5];
let array2: number[] = array.map((item: number) => item * 4).filter((item) => item > 10);

console.log(array);
console.log(array2);

const array: number[] = [1, 2, 3, 4, 5];
let array2: number[] = array.map((item: number) => item * 4).filter((item) => item > 10);

console.log(array);
console.log(array2);

const array3 = [
  { age: 12, name: '佐々木希' },
  { age: 32, name: '安倍ひろし' },
];

const [a, b] = [...array3];
console.log(a);
console.log(b);

const obj = { age: 12121, name: '佐々木希' };
const { name, age } = obj;
console.log(name);
console.log(age);

const obj2 = { age: 12121, name: '佐々木希' };
const obj3 = { ...obj2, sex: '女' };
console.log(obj3);

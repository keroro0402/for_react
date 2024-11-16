const array1: number[] = [1, 2, 3, 4, 5];

const array3 = [...array1];
array1.push(99);

console.log(array1);
console.log(array3);

interface Obj {
  name: String;
  age?: String;
}

const sasaki: Obj = {
  name: '佐々木希',
};
sasaki.age = '43';
const adachi: Obj = sasaki;

console.log(sasaki);
console.log(adachi);

import Pro from './components/Profile';
import Con from './components/Container';

let array = [
  {
    name: '斉藤ななみ',
    age: 32,
    hobbies: ['walking', 'running'],
  },
  {
    name: '大橋胸腺',
    age: 36,
    hobbies: ['movie'],
  },
  {
    name: '鎌倉太一郎',
    age: 53,
    hobbies: ['fishing', 'drive', 'fly'],
  },
  {
    name: '大崎みるく',
    age: 61,
    hobbies: ['卓球', '野球', '走り込み', '散歩'],
  },
];

let obj = {
  name: 'ジョーカー',
  age: 999,
  hobbies: ['death'],
};

export default () => {
  return (
    <>
      <Con>
        {/* <Pro {...array[0]} /> */}
        {array.map((item, index) => {
          <Pro item />;
        })}
        {/* <Pro /> */}
      </Con>
      <hr></hr>
    </>
  );
};

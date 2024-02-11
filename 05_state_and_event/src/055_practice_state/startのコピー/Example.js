import Pearent from './Pearent.mjs';
import Child from './Child.js';
import { useState } from 'react';

const array = [
  {
    name: '斉藤ななみ',
    age: 42,
    hobbies: ['水泳', 'ランニング'],
  },
  {
    name: '大場つぐみ',
    age: 23,
    hobbies: ['漫画'],
  },
  {
    name: '山本剛志',
    age: 34,
    hobbies: ['散歩', 'ゲーム', 'ドライブ'],
  },
  {
    name: 'AKIRA',
    age: 37,
    hobbies: ['サバゲー', '映画', '買い物', '散歩', 'ランニング'],
  },
  {
    name: '皐月緑',
    age: 66,
    hobbies: ['料理', 'ランニング', '買い物'],
  },
];

const Example = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: {count}</p>
      <button
        onClick={() => {
          setCount((pre) => {
            return (pre += 1);
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((pre) => (pre -= 1));
        }}
      >
        -
      </button>
      <hr></hr>
      <Pearent>
        {array.map((item) => {
          return (
            <ul key={item.name}>
              <Child item={item} />
            </ul>
          );
        })}
      </Pearent>
    </>
  );
};

export default Example;

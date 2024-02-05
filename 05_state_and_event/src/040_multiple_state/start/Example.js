import { useState } from 'react';

const Example = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(10);
  let [count3, setCount3] = useState(100);
  return (
    <>
      <button
        onClick={() => {
          setCount1((pre) => {
            return (pre += 1);
          });
        }}
      >
        ボタンA
      </button>
      <p>ボタンAを{count1}回押しました！！</p>
      <button
        onClick={() => {
          setCount2((pre) => {
            return (pre += 1);
          });
        }}
      >
        ボタンB
      </button>
      <p>ボタンBを{count2}回押しました！！</p>
      <button
        onClick={() => {
          setCount3((pre) => {
            return (pre += 1);
          });
        }}
      >
        ボタンC
      </button>
      <p>ボタンCを{count3}回押しました！！</p>
    </>
  );
};

export default Example;

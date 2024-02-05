import { useState } from 'react';
import Comp from './Comp';

const Example = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  return (
    <>
      <p>現在のカウント数：{count}回</p>
      <button
        onClick={() => {
          setCount((pre) => {
            return pre + 1;
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((pre) => {
            return pre - 1;
          });
        }}
      >
        -
      </button>
      <hr></hr>
      <Comp count={count2} setCount2={setCount2} />
    </>
  );
};

export default Example;

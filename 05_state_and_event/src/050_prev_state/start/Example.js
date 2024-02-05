import { useState } from 'react';

const Example = () => {
  let [count, setCount] = useState(0);

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
    </>
  );
};

export default Example;

import { useState } from 'react';

export default () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <p>現在のカウント数：{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </>
  );
};

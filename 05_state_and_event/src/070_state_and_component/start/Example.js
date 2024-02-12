import { useState } from 'react';

let Comp = ({ title }) => {
  let [count, setCount] = useState(0);
  return (
    <>
      <h2>
        {title} : {count}
      </h2>
      <button
        onClick={() => {
          setCount((pre) => (pre += 1));
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
    </>
  );
};

export default () => {
  let [flg, setFlg] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setFlg((flg = !flg));
        }}
      >
        toggle
      </button>
      <div>{flg ? <Comp title='A' key='A' /> : <Comp title='B' key='B' />}</div>
    </>
  );
};

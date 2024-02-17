import { useState } from 'react';
import Con from './Cont';
import './style.scss';

export default () => {
  let [flg, setFlg] = useState(true);

  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(0);

  let Cont = (data) => {
    const { title, count, setCount } = data;

    return (
      <>
        <h2>{title}</h2>
        <p>{count}</p>
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

  return (
    <>
      <button
        onClick={() => {
          setFlg((item) => {
            return (item = !item);
          });
        }}
      >
        切り替え
      </button>
      {flg ? (
        <Cont title='A' setCount={setCountA} count={countA} />
      ) : (
        <Cont title='B' setCount={setCountB} count={countB} />
      )}
      <div className='con'>
        <Con />
      </div>
    </>
  );
};

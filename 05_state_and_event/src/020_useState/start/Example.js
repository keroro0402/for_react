import { useState } from 'react';

const Example = () => {
  let [val, setVal] = useState('');

  let [val2, setVal2] = useState('');

  let [val3, setVal3] = useState(0);

  let mkinp = function () {
    return {
      id: Math.floor(Math.random() * 1e4),
      val: <input type='text' />,
    };
  };

  let arrayInit = [mkinp(), mkinp(), mkinp()];

  let [array, setArray] = useState(arrayInit);
  return (
    <>
      <button
        onClick={() => {
          setArray([mkinp(), ...array]);
        }}
      >
        追加
      </button>
      <br></br>
      {array.map((item) => {
        return <p key={item.id}>{item.val}</p>;
      })}
      <hr></hr>
      <input
        type='button'
        onClick={() => {
          setVal3((pre) => (pre += 1));
        }}
      />
      カウント
      <p>{val3}</p>
      <input
        type='text'
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      ={val}
      <br></br>
      <br></br>
      <input
        type='text'
        onChange={(e) => {
          setVal2(e.target.value);
        }}
      />
      ={val2}
    </>
  );
};

export default Example;

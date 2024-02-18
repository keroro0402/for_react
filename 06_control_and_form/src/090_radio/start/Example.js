import { useState } from 'react';

const Example = () => {
  let [val, setVal] = useState('APPLE');
  return (
    <>
      <input
        name='item'
        value='APPLE'
        type='radio'
        checked
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      APPLE
      <input
        name='item'
        value='BANANA'
        type='radio'
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      BANANA
      <input
        name='item'
        value='CHERRY'
        type='radio'
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      CHERRY
      <h3>{val}</h3>
      <p style={{ textAlign: 'center' }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
    </>
  );
};

export default Example;

import { useState } from 'react';

const Example = () => {
  let [val, setVal] = useState('');
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
        <input
          value={val}
          type='text'
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <textarea
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        ></textarea>
      </p>
      <p>{val}</p>
      <button
        onClick={() => {
          setVal('');
        }}
      >
        クリア
      </button>
    </>
  );
};

export default Example;

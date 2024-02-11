import { useMemo, useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  let [num, setNum] = useState(numArray);

  function shuffle() {
    const addNum = num.pop();
    num.unshift(addNum);
    let newArray = [...num];
    setNum(newArray);
  }

  return (
    <>
      <h3>{num}</h3>
      <input
        value='shuffle'
        type='button'
        onClick={() => {
          shuffle();
        }}
      />
    </>
  );
};

export default Example;

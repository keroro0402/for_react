import { useState } from 'react';

export default () => {
  let mkinp = () => {
    return {
      num: Math.floor(Math.random() * 1e3),
      val: <input type='type' />,
    };
  };

  let [array, setArray] = useState([mkinp()]);

  return (
    <>
      <button
        onClick={() => {
          let newArray = [];
          newArray = [mkinp(), ...array];
          setArray(newArray);
        }}
      >
        先頭に追加
      </button>
      <ul>
        {array.map((item) => {
          return (
            <li key={item.num}>
              {item.num} : {item.val}
            </li>
          );
        })}
      </ul>
    </>
  );
};

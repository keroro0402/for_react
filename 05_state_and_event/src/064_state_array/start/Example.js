import { useMemo, useState } from 'react';

const Example = () => {
  const personArray = [
    { name: '斉藤ななみ', age: 32 },
    { name: '山梨和幸', age: 44 },
  ];

  let [current, setCurrent] = useState(0);
  let [person, setArray] = useState(personArray);
  let [name, setName] = useState('');
  let [age, setAge] = useState(0);

  function adds() {
    setArray([...person, { name: name, age: age }]);
    setName('');
    setAge(0);
  }

  function shuffle() {
    const random = Math.floor(Math.random() * person.length);

    setCurrent(random);
  }

  return (
    <>
      名前：
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br></br>
      年齢：
      <input
        type='number'
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br></br>
      <input type='button' value='追加' onClick={adds} />
      <hr></hr>
      <h3>名前：{person[current].name}</h3>
      <h3>年齢：{person[current].age}歳</h3>
      <input value='shuffle' type='button' onClick={shuffle} />
    </>
  );
};

export default Example;

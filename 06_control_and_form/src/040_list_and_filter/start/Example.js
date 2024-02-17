import { useState } from 'react';
import Cont from './Cont.js';

const animals = ['Dog', 'Cat', 'Rat', 'Bird', 'Fish', 'Monkey'];

const Example = () => {
  let [filter, setFilter] = useState('');
  let [filter2, setFilter2] = useState('');
  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setFilter2(e.target.value);
        }}
      />
      <Cont props={animals} fil={filter2} />
      <hr></hr>
      <h3>配列のフィルター</h3>
      <input
        type='text'
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <ul>
        {animals
          .filter((item) => {
            return item.indexOf(filter) != -1;
          })
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;

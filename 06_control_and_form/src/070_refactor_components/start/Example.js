import { useState } from 'react';
import Filter from './Filter';
import List from './List';

let array = ['Fish', 'Cat', 'Dog', null, 'Monkey'];

export default () => {
  let [filter, setFilter] = useState('');
  let filterdAnimals = array.filter((item) => {
    item = item ?? '';
    return item.indexOf(filter) != -1;
  });
  return (
    <>
      <Filter setFilter={setFilter} />
      <List filterdAnimals={filterdAnimals} />
    </>
  );
};

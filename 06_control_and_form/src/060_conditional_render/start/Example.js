import { useState } from 'react';

let array = ['Bird', 'Cat', null, 'Fish', 'Dog', 'Monkey'];
export default () => {
  let [filter, setFilter] = useState('');
  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <ul>
        {array
          .filter((item) => {
            item = item ?? '';
            let isMatch = item.indexOf(filter) != -1;
            return isMatch;
          })
          .map((item) => {
            return (
              <li key={item}>
                {item ?? 'nullかundefinedです'}
                {item === 'Dog' && '⭐️'}
              </li>
            );
          })}
      </ul>
    </>
  );
};

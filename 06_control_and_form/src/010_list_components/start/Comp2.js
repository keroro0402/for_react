import { useState } from 'react';
import chinko from './list2.json';

export default () => {
  let [val, setVal] = useState('');

  let itemList = [];
  for (let item of chinko) {
    itemList.push(<li key={item.state}>{item.state}</li>);
  }
  console.log(itemList);

  return (
    <>
      <div className='sw'>
        <p className='area'>
          <input
            type='text'
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          {val}
        </p>

        <ul>{itemList}</ul>
      </div>
    </>
  );
};

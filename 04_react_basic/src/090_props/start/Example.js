import Child from './components/Child.js';

let obj = {
  name: '斉藤ななみ',
  age: 32,
  hobbies: ['散歩', 'ランニング'],
};

export default () => {
  return (
    <>
      <Child {...obj} />
    </>
  );
};

import Child from './components/Child';

let obj = { name: '斉藤ななみ', age: 32 };

export default () => {
  return (
    <>
      <Child {...obj} classs='red' />
      <hr></hr>
      <Child {...obj} />
    </>
  );
};

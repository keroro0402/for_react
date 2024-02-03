import Child from './components/Child';

export default () => {
  return (
    <>
      <div className='App-start'>
        <Child />
        <Child color='red' />
      </div>
    </>
  );
};

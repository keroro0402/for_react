import './Example.scss';
import Comp from './Comp';

const Sub = () => {
  return (
    <>
      <div className='subcomp'>
        <p>この青枠はpropsで子コンポーネントに渡され、importされました。</p>
      </div>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Comp />
      <hr></hr>
      <Comp comp={Sub()} />
    </>
  );
};

export default Example;

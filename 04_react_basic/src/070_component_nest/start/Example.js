import './style.scss';
import List from './list.json';
import Comp from './Comp';

export default () => {
  return (
    <>
      <Comp list={List} />
    </>
  );
};

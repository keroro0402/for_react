import './style.scss';
import List from './list.json';
import Comp from './Comp';
import Comp2 from './Comp2';

export default () => {
  return (
    <>
      <Comp list={List} />
      <hr></hr>
      <Comp2 {...List} />
    </>
  );
};

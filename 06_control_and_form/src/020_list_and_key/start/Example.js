import { Comp99 } from './Comp99';
import Land from './Land';
import Land2 from './Land2';
import List2 from './list2.json';
import './style.scss';
export default () => {
  return (
    <>
      <Comp99>
        <Land list={List2} />
      </Comp99>
      <Comp99>
        <Land2 list={List2} />
      </Comp99>
    </>
  );
};

import './style.scss';
import { Comp } from './Comp';
import Comp2 from './Comp2';
import list from './list.json';

export default () => {
  return (
    <>
      <div className='comp'>
        <p className='comp__items'>こんばんは</p>
      </div>
      <Comp>
        <Comp2 list={list} />
      </Comp>
    </>
  );
};

import { Comp } from './Comp.js';
import Comp2 from './Comp2.js';
import SexMachine from './list.json';
import './Style.scss';

export default () => {
  return (
    <>
      <Comp json={SexMachine} />
      <hr></hr>
      <Comp2 />
    </>
  );
};

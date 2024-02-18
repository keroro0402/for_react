import Comp from './Comp.js';
import Comp2 from './Comp2.js';
import Comp3 from './Comp3.js';
/* ESモジュールではパスを書かないとnode_module直下のパッケージを探しに行ってしまうので、ファイルを指定する場合は必ず、
パスを書かないといけない！！！
*/

let array = [1, 2, 3];

let obj = { name: '斉藤ななみ', age: 32 };

let objInArray = [
  {
    name: '大沢あかね',
    age: 42,
  },
  {
    name: '道家春畑',
    age: 12,
  },
  {
    name: '鼎鈴鹿',
    age: 54,
  },
];

export default () => {
  return (
    <>
      <h3>こんばんは、こんにちは。</h3>
      <Comp array={array} />
      <Comp2 obj={obj} />
      <Comp3 objInArray={objInArray} />
      {/* <Comp3 {...objInArray} /> */}
    </>
  );
};

import C from './comp';

const mes1 = 'JSX';
const array = ['item1', 'item2', 'item3', 'item4', 'item5'];
const fn = (data) => {
  return `Hello ${data}`;
};
const obj = {
  mes1: 'Rain',
  mes2: 'OBJ',
};

export default () => {
  return (
    <>
      <h3>Hello {mes1}</h3>
      {/* <C /> */}
      <hr></hr>
      <h3>{fn('Function')}</h3>
      <hr></hr>
      <C array={array} />
      <hr></hr>
      <h3>
        {obj.mes1} : {obj.mes2}
      </h3>
    </>
  );
};

// const title = 'Expression';
// const array = ['item1', 'item2', 'item3'];
// const fn = (arg) => {
//   return `${arg} Function`;
// };
// const upperCaseText = 'UpperCaseText';

// const Example = () => {
//   return (
//     <div className='fragment'>
//       <h3>練習問題</h3>
//       <p>
//         記述を変更し、完成コードと同じ状態になるようにしてください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。※fragmentクラスの付与されたdivタグはfragmentを使用した記法に変更してください。
//       </p>
//       <h3></h3>
//       <h3></h3>
//       <h3></h3>
//       <h3></h3>
//       <h3></h3>
//     </div>
//   );
// };

//export default Example;

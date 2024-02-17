import Prof from './components/Profile';

const Example = () => {
  let array = [
    {
      name: '大沢きら',
      age: 43,
      hobbies: ['sports', 'music'],
    },
    {
      name: '斉藤ななみ',
      age: 12,
      hobbies: ['sports', 'music'],
    },
    {
      name: '影星',
      age: 13,
      hobbies: ['sports', 'music'],
    },
    {
      name: '道側',
      age: 33,
      hobbies: ['sports', 'music'],
    },
  ];

  const obj = { name: 'かまきり', age: 21 };

  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {array.map((item) => {
          return <Prof key={item.name} {...item} />;
        })}
      </ul>
      <hr></hr>
      <Prof {...obj} />
    </>
  );
};

export default Example;

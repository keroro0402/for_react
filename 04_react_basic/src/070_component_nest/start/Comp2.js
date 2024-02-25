export default (props) => {
  let newArray = [];
  for (let item in props) {
    newArray.push(<li key={props[item].id}>{props[item].name}</li>);
  }

  console.log(newArray);

  return (
    <>
      <div className='section'>
        <h2 className='h2'>コンポート</h2>
        <p className='section__item--txt'>スプレッド構文で展開した</p>
        <div className='section__item'>
          <ul className='section__item--list'>{newArray}</ul>
        </div>
      </div>
    </>
  );
};

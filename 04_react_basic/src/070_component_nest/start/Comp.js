export default (props) => {
  let { list } = props;
  return (
    <>
      <div className='section'>
        <h2 className='h2'>コンポート</h2>
        <p className='section__item--txt'>配列をそのまま渡した</p>
        <div className='section__item'>
          <ul className='section__item--list'>
            {list.map((item) => (
              <li key={item.id} className='section__item--list-inner'>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

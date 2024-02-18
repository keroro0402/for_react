import Item from './Item';

export default ({ filterdAnimals }) => {
  console.log(filterdAnimals);
  if (filterdAnimals.length) {
    return (
      <>
        <ul>
          {filterdAnimals.map((item) => {
            return (
              <li key={item}>
                <Item item={item} />
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return <h3>ありません・・・・</h3>;
  }
};

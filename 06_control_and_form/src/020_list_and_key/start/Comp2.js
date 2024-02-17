export default ({ list }) => {
  let newArray = [];
  for (let item of list) {
    newArray.push(<li key={item.name}>{item.name}</li>);
  }
  console.log(newArray);
  return (
    <>
      <p>mapで表示パターン</p>
      <ul>
        {list.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
      <hr></hr>
      <p>for文でのパターン</p>
      <ul>{newArray}</ul>
    </>
  );
};

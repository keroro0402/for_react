export default (props) => {
  const list = props.list;
  let newArray = [];
  for (let item of list) {
    newArray.push(<li key={item.name}>{item.name}</li>);
  }
  console.log(newArray);
  return (
    <>
      <h2>for文を使った繰り返し</h2>
      <ul>{newArray}</ul>
    </>
  );
};

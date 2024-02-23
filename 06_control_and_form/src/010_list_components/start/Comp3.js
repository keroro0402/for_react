export default ({ list }) => {
  let newArray = [];
  for (let item of list) {
    newArray.push(<li key={item.name}>{item.name}</li>);
  }
  return <>{newArray}</>;
};

export default (props) => {
  const list = props.list;
  return (
    <>
      <h2>mapを使った繰り返し</h2>
      <ul>
        {list.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

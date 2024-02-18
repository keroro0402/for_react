export default (props) => {
  console.log(props);
  let { objInArray } = props;
  console.log(objInArray);
  return (
    <>
      {objInArray.map((item) => {
        return <p key={item.name}>{item.name}</p>;
      })}
    </>
  );
};

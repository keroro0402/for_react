export default (props) => {
  console.log(props.obj);
  return (
    <>
      <p>
        {props.obj.name}　：　{props.obj.age}
      </p>
    </>
  );
};

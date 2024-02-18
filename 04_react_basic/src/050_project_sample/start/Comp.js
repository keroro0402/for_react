export default (props) => {
  console.log(props.array);
  return (
    <>
      <div>
        {props.array.map((item) => {
          return <span key={item}>{item}</span>;
        })}
      </div>
    </>
  );
};

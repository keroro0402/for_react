export default ({ props }) => {
  return (
    <>
      {props.map((item) => {
        return (
          <ul key={item.name}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.hobbies}</li>
            {/* <li key={item.age}>{item.age}</li> */}
          </ul>
        );
      })}
    </>
  );
};

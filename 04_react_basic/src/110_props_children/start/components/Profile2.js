export default ({ prop }) => {
  // const { prop } = props;
  // console.log(prop);
  return (
    <>
      {prop.map((item) => {
        return (
          <ul key={item.name}>
            <li>{item.name}</li>
          </ul>
        );
      })}
    </>
  );
};

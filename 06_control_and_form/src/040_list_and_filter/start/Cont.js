export default (prop) => {
  console.log(prop);
  const { props, fil } = prop;
  return (
    <>
      <ul>
        {props
          .filter((item) => {
            return item.indexOf(fil) != -1;
          })
          .map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </>
  );
};

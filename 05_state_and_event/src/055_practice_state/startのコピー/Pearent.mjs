export default ({ children }) => {
  console.log(children);

  return (
    <>
      {children.map((item) => {
        return <div key={item.key}>{item}</div>;
      })}
    </>
  );
};

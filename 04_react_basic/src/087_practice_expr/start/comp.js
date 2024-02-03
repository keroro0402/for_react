export default ({ array }) => {
  return (
    <>
      <h3>
        {array.map((item) => {
          return <span key={item}>{item}</span>;
        })}
      </h3>
    </>
  );
};

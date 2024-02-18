export default ({ setFilter }) => {
  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </>
  );
};

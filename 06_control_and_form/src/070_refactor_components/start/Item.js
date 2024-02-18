export default (data) => {
  const y = data.item ?? 'null';
  return (
    <>
      {y}
      {data.item === 'Dog' && '⭐️'}
    </>
  );
};

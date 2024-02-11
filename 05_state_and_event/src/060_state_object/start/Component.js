export default ({ name, age, setName, setAge }) => {
  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type='number'
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setAge('');
          setName('');
        }}
      >
        リセット
      </button>
    </>
  );
};

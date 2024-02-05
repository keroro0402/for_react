export default ({ count, setCount2 }) => {
  return (
    <>
      <p>現在のカウント：{count}回</p>
      <button
        onClick={() => {
          setCount2((pre) => {
            return pre + 1;
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount2((pre) => {
            return pre - 1;
          });
        }}
      >
        -
      </button>
    </>
  );
};

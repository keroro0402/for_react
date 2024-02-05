export default ({ item }) => {
  console.log(item);
  return (
    <>
      <li>{item.name}</li>
      <li>{item.age}</li>
      <li>
        趣味：
        {item.hobbies.map((item) => {
          return (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          );
        })}
      </li>
      <hr></hr>
    </>
  );
};

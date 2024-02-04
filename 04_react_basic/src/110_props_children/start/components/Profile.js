// export default (data) => {
//   console.log(data);

//   let a = [];

//   console.log(a);
//   return (
//     <>
//       <p></p>
//     </>
//   );
// };

export default ({ name, age, hobbies }) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{age}</p>
        {hobbies.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </>
  );
};

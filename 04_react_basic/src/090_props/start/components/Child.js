import './Child.scss';

export default ({ name, age, classs = 'blue' }) => {
  console.log(name, age, classs);
  return (
    <>
      <div className={classs}>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </>
  );
};

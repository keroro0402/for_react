const Comp = function ({ json: props }) {
  return (
    <>
      <ul className='comp__item'>
        {props.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export { Comp };

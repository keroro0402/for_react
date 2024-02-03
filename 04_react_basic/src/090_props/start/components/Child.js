import './Child.css';

export default ({ color: c = 'blue' }) => {
  return (
    <>
      <div className={`component ${c}`}>
        <p>Hello Component</p>
      </div>
    </>
  );
};

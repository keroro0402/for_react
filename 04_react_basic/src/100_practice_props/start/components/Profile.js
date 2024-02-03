import './Profile.css';

const Profile = (props) => {
  console.log(props);
  let { name = 'John Doe', age = '??', country = 'Japan' } = props;
  return (
    <div className='profile'>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>From :{country} </p>
    </div>
  );
};

export default Profile;

import Container from './components/Container';
import Profile from './components/Profile';

export default () => {
  let arrayObj = [
    {
      name: '斉藤ななみ',
      age: 32,
      hobbies: ['散歩', 'ランニング'],
    },
    {
      name: '山本剛志',
      age: 43,
      hobbies: ['熱帯魚', '音楽', '映画'],
    },
    {
      name: '佐々木みなと',
      age: 53,
      hobbies: ['買い物'],
    },
  ];

  return (
    <>
      <Container>
        <Profile
          props={arrayObj.map((item) => {
            return item;
          })}
        />
      </Container>
    </>
  );
};

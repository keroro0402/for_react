import Container from './components/Container';
import Profile from './components/Profile';
import Container2 from './components/Container2';
import Profile2 from './components/Profile2';

import List from './List.json';

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
  ];

  return (
    <>
      <Container2>
        <Profile2 prop={List} />
      </Container2>
      <hr></hr>
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

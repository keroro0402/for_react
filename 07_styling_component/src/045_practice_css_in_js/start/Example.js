import styled from 'styled-components';
import './style.scss';

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background: pink;
`;

const Two = styled(FirstButton)`
  background: red;
  color: white;
`;

const Ser = styled(Two)`
  background: ${({ dark }) => (dark ? 'black' : 'green')};
`;
const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        <ul>
          <li>Q1. FirstButtonのbackgroudをpinkにしてください。</li>
          <li>
            Q2.
            FirstButtonを継承したSecondButtonを作成し、backgroudをredに、colorをwhiteにしてください。{' '}
          </li>
          <li>
            Q3.
            SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
          </li>
        </ul>
      </p>
      <FirstButton>ボタン1</FirstButton>
      <Two>ボタン2</Two>
      <Ser dark>ボタン2</Ser>
      <Ser>ボタン2</Ser>
    </>
  );
};

export default Example;

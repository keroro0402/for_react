import { useState } from 'react';
import styled from 'styled-components';

console.dir(styled);
const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? 'pink' : '')};
`;

const Orange = styled(StyledButton)`
  background-color: orange;
  font-size: 1em;

  :hover {
    color: red;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const onClickHandler = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <>
      <StyledButton isSelected={isSelected} onClick={onClickHandler}>
        ボタン
      </StyledButton>
      <Orange isSelected={isSelected} onClick={onClickHandler}>
        ボタン
      </Orange>
    </>
  );
};

export default Example;

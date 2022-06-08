import React, { useState } from 'react';
import styled from 'styled-components';

function ToggleList({ list = ['작성중입니다.'] }) {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => setIsOn(!isOn);

  return (
    <Container>
      <Title onClick={handleToggle}>
        <div>{isOn ? `▲` : `▼`}</div>
        {isOn ? `Close` : `Open`}
      </Title>
      {isOn && (
        <List>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </List>
      )}
    </Container>
  );
}

export default ToggleList;

const Container = styled.section`
  margin-top: 8px;
`;

const Title = styled.p`
  cursor: pointer;
  div {
    display: inline-block;
    font-size: 0.6rem;
    width: 16px;
  }
`;

const List = styled.ul`
  margin-top: 4px;
  margin-left: 10px;
  list-style: '- ' inside;
`;

import React from 'react';
import styled from 'styled-components';

function Modal({ modalOn, setModalOn, imgSrc, title }) {
  return (
    modalOn && (
      <>
        <Background onClick={() => setModalOn(false)} />
        <Container onClick={() => setModalOn(false)}>
          <h2>✨ {title} ✨</h2>
          <Img src={imgSrc} />
        </Container>
      </>
    )
  );
}

export default Modal;

const Background = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 30px;
  max-width: 80vw;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);

  h2 {
    color: #000;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }
  img {
    object-fit: contain;
  }
`;

const Img = styled.img`
  max-height: 75vh;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ToggleList from './ToggleList';
import Modal from './Modal';
import projectList from '../data/PortfolioData';

function Portfolio() {
  const lang = useSelector((state) => state.lang);
  const [modalOn, setModalOn] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  const [title, setTitle] = useState('');

  return (
    <Container>
      <Modal
        modalOn={modalOn}
        setModalOn={setModalOn}
        imgSrc={imgSrc}
        title={title}
      />
      {projectList
        .filter((proj) => lang === proj.lang)
        .map((proj) => (
          <Project key={`${proj.title}`}>
            <PhotoContainer>
              {proj.photos.map((photo, photoIdx) => (
                <img
                  key={`${proj.title}_${photoIdx}`}
                  src={photo}
                  alt="포트폴리오 이미지"
                  onClick={() => {
                    setImgSrc(photo);
                    setModalOn(true);
                    setTitle(proj.title);
                  }}
                  onKeyDown={() => {
                    setImgSrc(photo);
                    setModalOn(true);
                    setTitle(proj.title);
                  }}
                />
              ))}
            </PhotoContainer>
            <ExpContainer>
              <h2>{proj.title}</h2>
              <p>{proj.summary}</p>
              <ul className="list-with-dash">
                <li>
                  {proj.links.map((link) => (
                    <a
                      key={`${proj.title}_${link.type}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={link.to}
                    >
                      {link.type}
                    </a>
                  ))}
                </li>
                {proj.descriptions.map((description) => (
                  <li key={`${proj.title}_${description}`}>{description}</li>
                ))}
              </ul>
              <ToggleList list={proj.details} />
            </ExpContainer>
          </Project>
        ))}
    </Container>
  );
}

export default Portfolio;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 1.1rem;
    text-decoration: underline;
  }
  .list-with-dash {
    margin-top: 1rem;
    list-style: '· ' inside;
  }
  a {
    color: #0024c6;
    transition: all 0.5s;
    &:hover {
      color: #738dff;
      text-decoration: underline;
    }
    & + a {
      margin-left: 0.7rem;
    }
  }
`;

const Project = styled.article`
  display: flex;
  flex-direction: column;

  & + article {
    margin-top: 2.5rem;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #e6e6e6;
      position: absolute;
      top: -1.2rem;
    }
  }
`;

const PhotoContainer = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  height: 200px;
  width: 100%;
  overflow-x: scroll;

  img {
    height: 180px;
    cursor: pointer;
    box-shadow: 3px 3px 7px 3px rgb(0 0 0 / 15%);
    border-radius: 8px;
  }
`;

const ExpContainer = styled.article`
  margin-top: 10px;
`;

// const PageBreak = styled.div`
//   page-break-after: always;
// `;

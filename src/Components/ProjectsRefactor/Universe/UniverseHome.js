import React from "react";
import styled from "styled-components";
import api from "./api.png";
import northwestern from "./northwestern.png";
import BackButton from "../BackButton";
const ProjectContainer = styled.div`
  background: #011627;
  height: 93vh;
  width: 100vw;
  margin: 0;
  border-bottom: 1px solid #4b6478;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    background: #011627;
    height: 93vh;
    width: 100vw;
    border-bottom: 1px solid #4b6478;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
const ProjectLeft = styled.div`
  margin: 10px;
`;
const ProjectRight = styled.div`
  margin: 10px;
`;

const ImageContainer = styled.img`
  object-fit: cover;
  width: 45vw;
  margin: 5%;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
const ProjectTitle = styled.h2`
  color: #61dbfb;
`;
const Description = styled.p`
  color: white;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  margin: 1em;
  width: 7vw;

  height: 3vh;
  border-radius: 5px;
  border-style: solid;
  border-color: black;
  background: #61dbfb;
  font-family: "Changa One";
  cursor: pointer;
  min-width: 50px;
  :hover {
    color: white;
    border-style: solid;
    border-color: white;
    transform: scale(1.5);
    transition: 0.5s;
  }
`;
const A = styled.a`
  text-decoration: none;
`;
export default function UniverseHome() {
  return (
    <div>
      <ProjectContainer>
        <ProjectRight>
          <ProjectTitle>Exoplanet Showcase</ProjectTitle>
          <Description>
            I interviewed with a company and they asked me to build a quick
            <br></br>
            react app. So I made a frontend for the web api that serves nasas
            exoplanet data
            <br></br>
            REACT | REACT-PLANETARY | THREE
          </Description>
          <ButtonsContainer>
            <A
              href="https://northwestern-code-challenge.netlify.com/"
              target="_blank">
              <Button>Demo</Button>
            </A>
            <A
              href="https://github.com/Bryce-Soghigian/northwestern-mutual-code-challenge"
              target="_blank">
              <Button>Code</Button>
            </A>
          </ButtonsContainer>
        </ProjectRight>
        <ProjectLeft>
          <A
            target="_blank"
            href="https://northwestern-code-challenge.netlify.app/">
            <ImageContainer src={northwestern} />
          </A>
        </ProjectLeft>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectLeft>
          <A
            target="_blank"
            href="https://nasa-exoplanet-kepler-api.herokuapp.com/static/">
            <ImageContainer src={api} />
          </A>
        </ProjectLeft>
        <ProjectRight>
          <ProjectTitle>Nasa Exoplanets api</ProjectTitle>
          <Description>
            This is an app that seeds and serves nasas confirmed exoplanet data
            with pg.
            <br></br>
            EXPRESS | APIDOCS | PG | KNEX
          </Description>
          <ButtonsContainer>
            <A
              href="https://github.com/Bryce-Soghigian/nasa-exoplanets-api"
              target="_blank">
              <Button>Code</Button>
            </A>
            <A
              href="https://nasa-exoplanet-kepler-api.herokuapp.com/static/"
              target="_blank">
              <Button>Docs</Button>
            </A>
          </ButtonsContainer>
        </ProjectRight>
      </ProjectContainer>
      <BackButton />
    </div>
  );
}

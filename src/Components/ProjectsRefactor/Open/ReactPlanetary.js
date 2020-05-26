import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

export default function ReactPlanetary() {
  const ReactPlanetaryContainer = styled.div`
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
  const RightPlanetaryContainer = styled.div`
    margin: 10px;
    /* display:flex;
    align-content:center;
    /* justify-content:space-around; */
  `;

  const LeftPlanetaryContainer = styled.div`
    margin: 10px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-direction: column;
  `;
  const Title = styled.h2`
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

  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };
  return (
    <ReactPlanetaryContainer>
      <LeftPlanetaryContainer>
        <video
          style={{ width: "45vw" }}
          id="videoPlayer"
          controls
          muted="muted"
          autoplay="true"
          loop="true">
          <source
            src="https://portfolio-nodejs-streams.herokuapp.com/byname/planetary"
            type="video/mp4"
          />
        </video>
      </LeftPlanetaryContainer>
      <RightPlanetaryContainer>

        <Title>React Planetary</Title>
        <Typist className="Project2" cursor={CursorProps}>
          <Typist.Delay ms={0} />
          import * as THREE from 'three'
        </Typist>
        <Description>
          React Planetary is a library I built to allow you to import entire
          planets with a single line of code.
          <br></br>
          NPM | THREEJS | REACT
        </Description>
        <ButtonsContainer>
          <A
            href="https://heuristic-mestorf-b06f09.netlify.com/"
            target="_blank">
            <Button>Demo</Button>
          </A>
          <A
            href="https://github.com/Bryce-Soghigian/react-planetary"
            target="_blank">
            <Button>Code</Button>
          </A>
          <A
            href="https://www.npmjs.com/package/react-planetary"
            target="_blank">
            <Button>NPM</Button>
          </A>
        </ButtonsContainer>
      </RightPlanetaryContainer>
    </ReactPlanetaryContainer>
  );
}

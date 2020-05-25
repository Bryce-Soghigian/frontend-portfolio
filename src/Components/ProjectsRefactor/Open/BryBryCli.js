import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
export default function BryBryCli() {
  const CliContainer = styled.div`
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
  const ProjectRight = styled.div``;
  const Title = styled.h2`
    color: #61dbfb;
  `;
  const Description = styled.p`
    color: white;
    padding: 10px;
    border-left: 4px solid white;
    :visited {
      color: #61dafb;
    }
    @media (min-width: 800px) {
      border: none;
    }
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
    <CliContainer>
      <ProjectRight>
        <Typist className="Project2" cursor={CursorProps}>
          <Typist.Delay ms={1500} />
          npm i -g 'the_brybry_cli'
        </Typist>
        <Title>The BryBry Cli</Title>

        <Description>
          This is a command line interface I built to allow me to scaffold
          projects quickly like vue-create or create-react-app.
          <br /> NPM | NODE | INQUIRER{" "}
        </Description>
        <ButtonsContainer>
          <A
            href="https://github.com/Bryce-Soghigian/the_brybry_cli"
            target="_blank">
            <Button>Code</Button>
          </A>
          <A
            href="https://www.npmjs.com/package/the_brybry_cli"
            target="_blank">
            <Button>NPM</Button>
          </A>
        </ButtonsContainer>
      </ProjectRight>
      <ProjectLeft>
        <video
          style={{ width: "45vw" }}
          id="videoPlayer"
          controls
          muted="muted"
          autoplay="true"
          loop="true">
          <source
            src="https://portfolio-nodejs-streams.herokuapp.com/byname/cli"
            type="video/mp4"
          />
        </video>
      </ProjectLeft>
    </CliContainer>
  );
}

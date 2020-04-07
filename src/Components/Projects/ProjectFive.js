import React from "react";
import styled from "styled-components";
import react_planetary from './react-planetary.png'
const ProjectContainer = styled.div`
  background: #011627;
  height: 93vh;
  width: 100vw;
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

`
const ProjectLeft = styled.div`


`
const ProjectRight = styled.div`


`
const ImageContainer = styled.img`
  object-fit: cover;
  width: 45vw;
  margin: 5%;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }


`
const ProjectTitle = styled.h2`
color: dodgerblue;

`
const Description = styled.p`
color:white;

`
const ButtonsContainer = styled.div`

display:flex;
justify-content:center;


`
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
export default function ProjectFive() {
  return (
    <div>
        <ProjectContainer>

        <ProjectRight>
            <ProjectTitle>
                react-planetary
            </ProjectTitle>
            <Description>
                React planetary is an npm module that I built that allows you to import entire planets into your application with one line of code. 
                <br></br>
                 NPM | THREEJS | REACT | STORYBOOK
            </Description>
            <ButtonsContainer>
          <A
          href="https://heuristic-mestorf-b06f09.netlify.com/"
          target="_blank"
          >
            <Button>
              Demo
            </Button>
            </A>
            <A
            href="https://github.com/Bryce-Soghigian/react-planetary"
            target="_blank"
            >
              <Button>
                Code
              </Button>
            </A>
            <A
            href="https://www.npmjs.com/package/react-planetary"
            target="_blank"
            >
              <Button>
                NPM
              </Button>
            </A>
            </ButtonsContainer>
        </ProjectRight>
        <ProjectLeft>
            <ImageContainer src={react_planetary}/>
        </ProjectLeft>



        </ProjectContainer>

    </div>
  );
}

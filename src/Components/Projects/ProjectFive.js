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
                
            </Description>
        </ProjectRight>
        <ProjectLeft>
            <ImageContainer src={react_planetary}/>
        </ProjectLeft>



        </ProjectContainer>
        <ProjectContainer>

        </ProjectContainer>

    </div>
  );
}

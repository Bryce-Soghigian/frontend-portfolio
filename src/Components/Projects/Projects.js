import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import ProjectFilter from "./ProjectFilter";
import "./Projects.css";
import Node from "./node.png";
import CMT from "./Game.png";
import Crime from "./Crime.png";
import scribe from "./scribe.png";
const ComponentContainer = styled.div`
width:100vw;
overflow:hidden;
`;
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
  /* background:#011627;
height:93vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center; */
`;
const ProjectTwoContainer = styled.div`
  background: #011627;
  height: 99vh;
  width: 100vw;
  border-bottom: 1px solid #4b6478;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
const ProjectThreeContainer = styled.div`
  background: #011627;
  height: 99vh;
  width: 100vw;
  border-bottom: 1px solid #4b6478;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
const IMG = styled.img`
  object-fit: cover;
  width: 45vw;
  margin: 5%;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
/* // const IMG = styled.img`
// width:50vw;
// height:25vh;
// @media(min-width:1200px){
//     width:25vw;
// } */
/* @media(min-width:500px){
//     width:45vw;
// height:25vh;
// }
// @media(min-width:800px){
//     width:45vh
// }
// @media(min-width:1200px){
//     width:45vh
// }
// @media(min-width:1500px){
//     width:45vh
// } */

// `
//==================Project1=================//
const ProjectOneLeft = styled.div`
  width: 50vw;
  @media (max-width: 500px) {
  }
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
  /* display:flex;
flex-wrap: wrap;
flex-direction:column;
justify-content:flex-start; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const ProjectOneRight = styled.div`
  width: 50vw;
  display: flex;
`;
const Description = styled.p`
  color: white;
  padding: 10px;
  border-left: 4px solid white;
  :visited {
    color: #ecc48d;
  }
  @media (min-width: 800px) {
    border: none;
  }
`;
const DescriptionRight = styled.p`
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
const P1info = styled(Link)`
  color: #61dafb;
`;
const CMTTitle = styled.h1`
  color: #61dafb;
  margin: 0;
`;
//=============Project 2=========================//
const ProjectTwoLeft = styled.div`
  width: 50vw;
`;
const ProjectTwoRight = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;
const P2Info = styled(Link)`
  color: #ecc48d;
`;
const CrimeStatsTitle = styled.h1`
  color: #ecc48d;
  margin: 0;
`;
//=============Project3================//
const ProjectThreeLeft = styled.div`
  width: 50vw;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;
const ProjectThreeRight = styled.div`
  width: 50vw;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;
const ProjectThreeTitle = styled.h1`
  color: #addb67;
  margin: 0;
`;
const ProjectThreeMore = styled(Link)`
  color: #addb67;
`;
const A = styled.a``;
const ScribeTitle = styled.h1`
  /* color:#D3423E; */
  color: #1fb2aa;
  margin: 0;
`;
const P4Info = styled(Link)`
  /* color:#D3423E; */
  color: #1fb2aa;
`;
export default function Projects() {
  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300
  };
  return (
    <ComponentContainer >
      <ProjectTwoContainer>
        <ProjectTwoLeft>
          <A
            href="https://scribe-notes.netlify.com/transcripts"
            target="_blank"
          >
            <IMG src={scribe} />
          </A>
        </ProjectTwoLeft>
        <ProjectTwoRight>
          <Typist className="Project2" cursor={CursorProps}>
            <Typist.Delay ms={0} />
            import React from 'react'
          </Typist>
          <ScribeTitle>Scribe</ScribeTitle>
          <DescriptionRight>
          Voice Recognition Application<br/>
          React | Redux | MongoDB
          </DescriptionRight>
          <P4Info to="/Project4">Read More</P4Info>
        </ProjectTwoRight>
      </ProjectTwoContainer>
      <ProjectContainer>
        <ProjectOneLeft>
          <Typist className="Project1" cursor={CursorProps} ms={1000}>
            import * as THREE from 'three'
          </Typist>
          <CMTTitle>CMT9941</CMTTitle>
          <Description>
            A Horror/Puzzle Game<br/>
            ThreeJS | React | Django
          </Description>
          <P1info to="/Project1">Read More</P1info>
        </ProjectOneLeft>
        <ProjectOneRight>
          <A href="https://cmt-9442v1.netlify.com/" target="_blank">
            <IMG src={CMT} />
          </A>
          {/* <ProjectFilter/> */}
        </ProjectOneRight>
      </ProjectContainer>

      <ProjectTwoContainer>
        <ProjectTwoLeft>
          <A href="https://crimestatsfortravelers.com/" target="_blank">
            <IMG src={Crime} />
          </A>
        </ProjectTwoLeft>
        <ProjectTwoRight>
          <Typist className="Project2" cursor={CursorProps}>
            <Typist.Delay ms={1500} />
            import React from 'react';
          </Typist>
          <CrimeStatsTitle>Crime Statistics App</CrimeStatsTitle>
          <DescriptionRight>
            Crime Statistics Application<br/>
            Fullstory | React | Cypress | CI | Mapbox
          </DescriptionRight>
          <P2Info to="/Project2">Read More</P2Info>
        </ProjectTwoRight>
      </ProjectTwoContainer>
      <ProjectThreeContainer>
        <ProjectThreeLeft>
          <Typist className="Project2" cursor={CursorProps}>
            <Typist.Delay ms={2700} />
            const express = require("express")
          </Typist>
          <ProjectThreeTitle>NodeJS && Express APIS</ProjectThreeTitle>
          <Description>
            A collection of my favorite APIS I have built<br/>
            NodeJS | Express | Postgres | Mongo | GraphQL
          </Description>
          <ProjectThreeMore to="/Project3">Read More</ProjectThreeMore>
        </ProjectThreeLeft>
        <ProjectThreeRight>
          <A href="https://github.com/Bryce-Soghigian" target="_blank">
            <IMG src={Node} />
          </A>
        </ProjectThreeRight>
      </ProjectThreeContainer>
    </ComponentContainer>
  );
}

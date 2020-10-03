import React from "react";
import { FaReact, FaNodeJs, FaPython, FaSass} from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiHtml5 } from "react-icons/di";
import { GiMoebiusTriangle} from "react-icons/gi";
import styled from "styled-components";

const Container = styled.div`
  height: 93vh;
  width: 100vw;
  background: #011627;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Bottom = styled.div``;
const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5%;
`;
const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow-x: show;
`;
//============Icons=============//
const NodeWrapper = styled.a`
  color: #addb67;
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const ThreeHeader = styled.a`
  color: white;
  font-size: 2rem;

  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const ReactWrapper = styled.a`
  color: rgb(97, 218, 251);
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const JavascriptHeader = styled.a`
  color: #f7df1e;
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const PythonWrapper = styled.a`
  color: #4b8bbe;
  /* color:#0D73D9; */
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const SqlWrapper = styled.a`
  color: #0d73d9;
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const CssWrapper = styled.a`
  color: #bf4080;
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const HtmlWrapper = styled.a`
  color: #f16529;
  font-size: 2rem;
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
//==========Headers===========//
const HtmlHeader = styled.h3`
  color: #f16529;
  margin: 0;
`;
const CssHeader = styled.h3`
  color: #bf4080;
  margin: 0;
`;
const LightBlueHeader = styled.h3`
  color: #0d73d9;
  margin: 0;
`;
const DarkBlueHeader = styled.h3`
  color: #4b8bbe;
  margin: 0;
`;
const BlueHeader = styled.h3`
  color: rgb(97, 218, 251);
  margin: 0;
`;
const GreenHeader = styled.h3`
  color: #addb67;
  margin: 0;
`;
const YellowHeader = styled.h3`
  color: #f7df1e;

  margin: 0;
`;
const WhiteHeader = styled.h3`
  color: white;
  margin: 0;
`;
const SkillsText = styled.h1`
  font-size: 7rem;
  color: white;
  font-family: "Changa One";
`;

export default function Skills() {
  return (
    <Container>
      <Bottom>
        <SkillsContainer>
          <SkillContainer>
            <ReactWrapper>
              <FaReact />
            </ReactWrapper>
            <BlueHeader>ReactJS</BlueHeader>
          </SkillContainer>
          <SkillContainer>
            <NodeWrapper>
              <FaNodeJs />
            </NodeWrapper>
            <GreenHeader>NodeJS</GreenHeader>
          </SkillContainer>
          <SkillContainer>
            <JavascriptHeader>
              <DiJavascript1 />
            </JavascriptHeader>
            <YellowHeader>Javascript</YellowHeader>
          </SkillContainer>
          <SkillContainer>
            <ThreeHeader>
              <GiMoebiusTriangle />
            </ThreeHeader>
            <WhiteHeader>ThreeJS</WhiteHeader>
          </SkillContainer>
        </SkillsContainer>
        <SkillsText>SKILLS</SkillsText>

        <SkillsContainer>
          <SkillContainer>
            <SqlWrapper>
              <DiPostgresql />
            </SqlWrapper>
            <LightBlueHeader>Postgres</LightBlueHeader>
          </SkillContainer>
          <SkillContainer>
            <HtmlWrapper>
              <DiHtml5 />
            </HtmlWrapper>
            <HtmlHeader>HTML/CSS</HtmlHeader>
          </SkillContainer>
          <SkillContainer>
            <CssWrapper>
              <FaSass />
            </CssWrapper>
            <CssHeader>Sass/Less</CssHeader>
          </SkillContainer>
          <SkillContainer>
            <PythonWrapper>
              <FaPython />
            </PythonWrapper>
            <DarkBlueHeader>Python</DarkBlueHeader>
          </SkillContainer>
        </SkillsContainer>
      </Bottom>
    </Container>
  );
}

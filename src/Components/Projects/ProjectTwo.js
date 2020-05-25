import React from "react";
import styled from "styled-components";
import { FaCode } from "react-icons/fa";
import Crime from "./Crime2.png";
const Div = styled.div`
  margin: 40px;
`;
const ProjectTwoContainer = styled.div`
  background: #011627;
  height: 117vh;
  display: flex;
  justify-content: center;
  /* align-items:center; */
  flex-direction: column;
`;
const ProjectTitle = styled.h1`
  margin-top: 5%;
  color: #61dafb;
  text-decoration: initial;
  border-bottom: 2px solid #61dafb;
  text-transform: uppercase;
  @media (min-width: 500px) {
    margin: 1%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  margin: 0%;
  color: white;
  width: 75vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 1000px) {
    width: 50vw;
  }
`;
const H5 = styled.h5`
  text-transform: uppercase;
  color: #61dafb;
`;
const DescriptionContainer = styled.div`
  /* margin:15px; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const ListNumber = styled.p`
  color: #385164;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
const CenterContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;
const TechStack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 5%;
`;
const Tech = styled.p`
  margin-left: 5%;
  color: white;
`;

const Span = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ProjectTwo() {
  return (
    <ProjectTwoContainer>
      <Div></Div>
      <ImageContainer>
        <video
          style={{ width: "45vw" }}
          id="videoPlayer"
          controls
          muted="muted"
          autoplay
          loop>
          <source
            src="https://portfolio-nodejs-streams.herokuapp.com/Crime"
            type="video/mp4"
          />
        </video>
      </ImageContainer>

      <CenterContainer>
        <DescriptionContainer>
          <H5>Crime Statistics</H5>
          <Description>
            Crime statistics is a web application I built with crime statistics
            for travelers' teams. I wrote the code for the map functionality
            using Mapbox, and React. I also wrote the map style swap code, the
            data filtering, auth0 login functionality, Geolocation searching,
            along with all the data visualization present in our application
          </Description>
          <ButtonContainer>
            <A
              href="https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-fe"
              target="_blank">
              <Button>
                FE
                <FaCode />
              </Button>
            </A>
            <A
              href="https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-be"
              target="_blank">
              {" "}
              <Button>
                BE
                <FaCode />
              </Button>
            </A>
            <A href="https://crimestatsfortravelers.com/" target="_blank">
              {" "}
              <Button>Demo</Button>
            </A>
            <A
              href="https://www.notion.so/Crime-Statistics-for-Travelers-a7e69847024d4cdc85aaf85cb413df71"
              target="_blank">
              <Button>PVD</Button>
            </A>
          </ButtonContainer>
        </DescriptionContainer>
        <TechStack>
          <H5>Technologies</H5>
          <Span>
            <ListNumber>00</ListNumber>
            <Tech>ReactJS</Tech>
          </Span>
          <Span>
            <ListNumber>01</ListNumber>
            <Tech>MapboxGL</Tech>
          </Span>
          <Span>
            <ListNumber>02</ListNumber>
            <Tech>Express</Tech>
          </Span>
          <Span>
            <ListNumber>03</ListNumber>
            <Tech>Fullstory</Tech>
          </Span>
        </TechStack>
      </CenterContainer>
    </ProjectTwoContainer>
  );
}

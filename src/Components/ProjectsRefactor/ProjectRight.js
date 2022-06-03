import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { Link } from "react-router-dom";
/*
PROPS NEEDED

//=========Project Right=============//
${props.titlecolor};
{props.infoColor};
{props.importName}
{props.description}
{props.technology}
{props.link}//React router url 
{props.projectLink}// Link for the href to go to
{props.imageLink}//Imgage url
{props.route}
//======================================

*/
export default function ProjectRight(props) {
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
  `;
  const Title = styled.h1`
    color: ${props.titlecolor};
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
  const Info = styled(Link)`
    color: ${props.infoColor};
  `;
  const A = styled.a`
  color: ${props.infoColor};
  `;
  const ProjectLeft = styled.div`
    width: 50vw;
  `;
  const ProjectRight = styled.div`
    width: 50vw;
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 800px) {
      font-size: 1.2rem;
      width: 80vw;
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
    @media (max-width: 700px) {
      width: 50vw;
      display: block;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 0;
    }
  `;
  const Alink = styled(Link)``;
  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };
  const Learn = styled.h3`
  color: ${props.infoColor};
  text-decoration:none;
  `
  return (
    <ProjectContainer>
      <ProjectRight>
        <Typist className="Project2" cursor={CursorProps}>
          <Typist.Delay ms={0} />
          {props.importName}
        </Typist>
        <Title>{props.title}</Title>
        <Description>
          {props.description}
          <br />
          {props.technology}
        </Description>
        {props.isNavLink ? (
        <Info to={props.route}>Read More</Info>
        ):(
          <A href={props.projectLink} target="_blank">
                <Learn>Learn More</Learn>
          </A>
        )}
      </ProjectRight>
      <ProjectLeft>
        {props.isNavLink === true ? (
          <Alink to={props.route}>
            <IMG src={props.imageLink} />
          </Alink>
        ) : (
          <A href={props.projectLink} target="_blank">
            <IMG src={props.imageLink} />
          </A>
        )}
      </ProjectLeft>
    </ProjectContainer>
  );
}

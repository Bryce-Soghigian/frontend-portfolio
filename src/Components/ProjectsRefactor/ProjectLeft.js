import React from "react";
import Typist from "react-typist";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function ProjectLeft(props) {
  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };
  const ProjectContainer = styled.div`
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

  const ProjectRight = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size:1.5rem;
    align-items: center;
    @media (max-width: 800px) {
      font-size: 1.2rem;
      width:80vw;
    }
  `;
  const ProjectLeftContainer = styled.div`
    width: 50vw;

    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  `;
  const Alink = styled(Link)``;
  const A = styled.a``;
  const IMG = styled.img`
    object-fit: cover;
    width: 45vw;
    display:block;
    margin:auto;
    margin-top:50px;
    margin-bottom:0;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
    @media(max-width:700px){
      width:50vw;
      display:block;
    margin:auto;
    margin-top:50px;
    margin-bottom:0;
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
  return (
    <ProjectContainer>
      <ProjectLeftContainer>
        {props.isNavLink === true ? (
          <Alink to={props.route}>
            <IMG src={props.imageLink} />
          </Alink>
        ) : (
          <A href={props.projectLink} target="_blank">
            <IMG src={props.imageLink} />
          </A>
        )}
      </ProjectLeftContainer>
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
        <Info to={props.route}>Read More</Info>
      </ProjectRight>
    </ProjectContainer>
  );
}

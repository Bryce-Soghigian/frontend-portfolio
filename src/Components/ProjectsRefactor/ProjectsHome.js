import React from "react";
import styled from "styled-components";
import ProjectRight from "./ProjectRight";
import ProjectLeft from "./ProjectLeft";
export default function ProjectsHome() {
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
  const ComponentContainer = styled.div`
    width: 100vw;
    overflow-x: hidden;
  `;
  const blue = "#1e90ff";
  const lightblue = "#61dbfb";
  return (
    <ComponentContainer>
      <ProjectRight
        isNavLink={true}
        title="Open Source Work"
        importName="import { createBasicPlanet } from 'react-planetary'; "
        description="Open source projects published to the npm registry"
        technology="NPM | NODE | REACT | THREE"
        route="/Open"
        titlecolor={blue}
        infoColor={blue}
        imageLink="https://i.imgur.com/RIrixnU.jpg"
      />
      <ProjectLeft
        title="Data Science"
        imageLink="https://i.imgur.com/UivQoFy.png"
        titlecolor={lightblue}
        infoColor={lightblue}
        importName="pip3 install 'torch' "
        description="Some of my Data Visualization and Machine Learning Projects"
        technology="React | Python | Pytorch"
        route="/Data"
        isNavLink={true}
      />
      <ProjectRight
        title="Web Applications"
        titlecolor={blue}
        infoColor={blue}
        importName="import React,{useEffect,useContext} from 'react'; "
        imageLink="https://i.imgur.com/VoOA9Q3.jpg"
        description="Collection Of Web Apps I have built"
        technology="React | Express | PG | THREE"
        isNavLink={true}
        route="/apps"
      />
      <ProjectLeft
      title="Backend Development"
      titlecolor={lightblue}
      infocolor={lightblue}
      imageLink="https://i.imgur.com/2zabm6l.jpg"
      importName="const express = require('express').Router()"
      description="Some of my apis I have developed"
      technology="NodeJS | Python | Go"
      isNavLink={true}
      route="/apis" />
    </ComponentContainer>
  );
}

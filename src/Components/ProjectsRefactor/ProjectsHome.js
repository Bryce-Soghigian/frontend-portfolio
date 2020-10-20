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
        importName="import { createBasicPlanet } from 'react-planetary' "
        description="Open source projects published to the npm registry"
        technology="NPM | NODE | REACT | THREE"
        route="/Open"
        titlecolor={blue}
        infoColor={blue}
        imageLink="https://i.imgur.com/RIrixnU.jpg"
      />
      <ProjectLeft
        title="Data and Machine Learning"
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
        title="Universe Exploration"
        titlecolor={blue}
        infoColor={blue}
        importName="import React from 'react' "
        imageLink="https://i.imgur.com/oZOqHeE.jpg"
        description="Collection Of Apps to Explore the Universe"
        technology="React | Express | PG | THREE"
        isNavLink={true}
        route="/universe"
      />
    </ComponentContainer>
  );
}

import React from 'react'
import styled from 'styled-components'
import ProjectRight from './ProjectRight'
import ProjectLeft from './ProjectLeft'
export default function ProjectsHome() {
const ComponentContainer = styled.div`
width:100vw;
overflow-x:hidden;
`;
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
const blue = "#1e90ff"
    return (
        <ComponentContainer>
            <ProjectLeft 
            isNavLink={true}
            title="Open Source Work"
            importName="import { createBasicPlanet } from 'react-planetary' "
            description="Open source projects That I published to the npm registry"
            technology="NPM | NODE | REACT | THREE"
            route="/Open"
            titlecolor={blue}
            infoColor={blue}
            imageLink="https://i.imgur.com/RIrixnU.jpg"
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
                route="/Project5"
            />

        </ComponentContainer>
    )
}

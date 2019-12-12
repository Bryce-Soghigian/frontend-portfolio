import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import {Link} from 'react-router-dom';
import ProjectFilter from './ProjectFilter'
import './Projects.css'
import CMT from './Game.png'
const ComponentContainer = styled.div`

`
const ProjectContainer = styled.div`
background:#011627;
height:93vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;

`
const ProjectTwoContainer = styled.div`
background:#011627;
height:99vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;

`
// const IMG = styled.img`
// width:50vw;
// height:25vh;
// @media(min-width:1200px){
//     width:25vw;
// }
// /* @media(min-width:500px){
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
width:50vw;
/* display:flex;
flex-wrap: wrap;
flex-direction:column;
justify-content:flex-start; */
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
`
const ProjectOneRight = styled.div`
width:50vw;
display:flex;
`
const Description = styled.p`
color:#61DAFB;
:visited{
    color:#61DAFB;
}

`
const P1info= styled(Link)`
color:#61DAFB;
`
const CMTTitle = styled.h1`
color:#61DAFB;
`
//=============Project 2=========================//
const ProjectTwoLeft = styled.div`
width:50vw;
`
const ProjectTwoRight = styled.div`
width:50vw;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
`
const P2Info = styled(Link)`
color:#ECC48D;
`
const CrimeStatsTitle = styled.h1`
color:#ECC48D;
`
//=============Project3================//
const ProjectThreeLeft = styled.div`
width:50vw;

`
const ProjectThreeRight = styled.div`
width:50vw;
`
const ProjectThreeTitle = styled.h1`
color:#ADDB67;
`
const ProjectThreeMore = styled(Link)`


`
export default function Projects() {
    const CursorProps ={
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 300,
    }
    return (
        
        <ComponentContainer>
             <ProjectContainer>
                <ProjectOneLeft>
                    <Typist className="Project1" cursor={CursorProps}>import THREE from 'three';</Typist>
                    <CMTTitle>CMT9941</CMTTitle>
                    {/* <Description>A Horror/Puzzle Game Made
                         With threeJS,React,Django</Description> */}
                    <P1info to="/Project1">Read More</P1info>

                </ProjectOneLeft>
                <ProjectOneRight>
                    {/* <IMG src={CMT}/> */}
                    {/* <ProjectFilter/> */}
                </ProjectOneRight>
            </ProjectContainer>

            <ProjectTwoContainer>
                <ProjectTwoLeft>

                </ProjectTwoLeft>
                <ProjectTwoRight>
                <Typist className="Project2" cursor={CursorProps}>import React from 'react';</Typist>
                    <CrimeStatsTitle>Crime Statistics App</CrimeStatsTitle>
                    <P2Info to="/Project2">Read More</P2Info>
                </ProjectTwoRight>
            </ProjectTwoContainer>
        </ComponentContainer>

    )
}

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
flex-direction:column;

`
const IMG = styled.img`
width:100%;
height: auto;
`
//==================Project1=================//
const ProjectOneLeft = styled.div`
width:45vw;
`
const ProjectOneRight = styled.div`
width:45vw;
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
                    <Typist className="Project1" cursor={CursorProps}>import React from 'react';</Typist>
                    <CMTTitle>CMT9941</CMTTitle>
                    {/* <Description>A Horror/Puzzle Game Made
                         With threeJS,React,Django</Description> */}
                    <P1info to="/Project1">Read More</P1info>

                </ProjectOneLeft>
                <ProjectOneRight>
                    {/* <ProjectFilter/> */}
                </ProjectOneRight>
            </ProjectContainer>
        </ComponentContainer>

    )
}

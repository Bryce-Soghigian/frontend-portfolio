import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import {Link} from 'react-router-dom';
import ProjectFilter from './ProjectFilter'
import './Projects.css'
import Node from './node.png'
import CMT from './Game.png'
import Crime from './Crime.png'
const ComponentContainer = styled.div`

`
const ProjectContainer = styled.div`
background:#011627;
height:93vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(min-width:800px){
    background:#011627;
height:93vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
}
/* background:#011627;
height:93vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center; */





`
const ProjectTwoContainer = styled.div`
background:#011627;
height:99vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:column-reverse;
justify-content:center;
align-items:center;
@media(min-width:600px){
    display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
}

`
const ProjectThreeContainer = styled.div`
background:#011627;
height:99vh;
width:100vw;
border-bottom: 1px solid #4B6478;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(min-width:600px){
    display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
}

`
const IMG = styled.img`
object-fit:cover;
width:45vw;
margin:5%;
transition: all .2s ease-in-out;
:hover{
    transform: scale(1.1);
}
`
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
width:50vw;
@media(max-width:500px){
    
}
@media(min-width:800px){
    font-size:1.5rem;
}
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
color:white;
padding:10px;
border-left: 4px solid white;
:visited{
    color:#ECC48D;
}
@media(min-width:800px) {
    border:none;
}

`
const DescriptionRight = styled.p`
color:white;
padding:10px;
border-left: 4px solid white;
:visited{
    color:#61DAFB;
}
@media(min-width:800px) {
    border:none;
}
`
const P1info= styled(Link)`
color:#61DAFB;
`
const CMTTitle = styled.h1`
color:#61DAFB;
margin:0;
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
@media(min-width:800px){
    font-size:1.5rem;
}
`
const P2Info = styled(Link)`
color:#ECC48D;
`
const CrimeStatsTitle = styled.h1`
color:#ECC48D;
margin:0;
`
//=============Project3================//
const ProjectThreeLeft = styled.div`
width:50vw;
@media(min-width:800px){
    font-size:1.5rem;
}

`
const ProjectThreeRight = styled.div`
width:50vw;
@media(min-width:800px){
    font-size:1.5rem;
}
`
const ProjectThreeTitle = styled.h1`
color:#ADDB67;
margin:0;
`
const ProjectThreeMore = styled(Link)`
color:#ADDB67;

`
const A = styled.a`

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
                    <Description>A Horror/Puzzle Game Made
                         With ThreeJS,React,Django</Description>
                    <P1info to="/Project1">Read More</P1info>

                </ProjectOneLeft>
                <ProjectOneRight>
                <A href="https://cmt-9442v1.netlify.com/" target="_blank"><IMG src={CMT} /></A>
                    {/* <ProjectFilter/> */}
                </ProjectOneRight>
            </ProjectContainer>

            <ProjectTwoContainer>
                <ProjectTwoLeft>
                    <A href="https://crimestatsfortravelers.com/" target="_blank"><IMG src={Crime} /></A>
                </ProjectTwoLeft>
                <ProjectTwoRight>
                <Typist className="Project2" cursor={CursorProps}><Typist.Delay ms={1500}/>import React from 'react';</Typist>
                    <CrimeStatsTitle>Crime Statistics App</CrimeStatsTitle>
                    <DescriptionRight>Crime Statistics Application with testing,user habit tracking, and user analytics</DescriptionRight>
                    <P2Info to="/Project2">Read More</P2Info>
                </ProjectTwoRight>

            </ProjectTwoContainer>
            <ProjectThreeContainer>
                <ProjectThreeLeft>
                 <Typist className="Project2" cursor={CursorProps}><Typist.Delay ms={2700}/>const express = require("express")</Typist>
                <ProjectThreeTitle>NodeJS && Express APIS</ProjectThreeTitle>
                <Description>A collection of my favorite APIS I have built</Description>
                <ProjectThreeMore to="/Project3">Read More</ProjectThreeMore>
                </ProjectThreeLeft>
                <ProjectThreeRight>
                    <A href="https://github.com/Bryce-Soghigian" target="_blank"><IMG src={Node}/></A>
                </ProjectThreeRight>
            </ProjectThreeContainer>
        </ComponentContainer>

    )
}

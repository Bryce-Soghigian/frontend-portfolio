import React from 'react'
import styled from 'styled-components'
import { FaCode } from "react-icons/fa";
import  scribe from './scribe.png'
const Div = styled.div`
margin:40px;
`
const ProjectTwoContainer = styled.div`
background:#011627;
height:117vh;

display:flex;
justify-content:center;
/* align-items:center; */
flex-direction:column;
`
const ProjectTitle = styled.h1`
margin-top:5%;
color:#61DAFB;
text-decoration:initial;
border-bottom:2px solid #61DAFB;
text-transform:uppercase;
@media(min-width:500px) {
    margin:1%;
}

`
const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;



`
const IMG = styled.img`

object-fit:cover;
width:45vw;
`

const Description = styled.p`
margin:0%;
color:white;
width:75vw;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
@media(min-width:1000px){
    width:50vw;
}

`
const H5 = styled.h5`
text-transform:uppercase;
color:#61DAFB;
`
const DescriptionContainer = styled.div`
/* margin:15px; */
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
`
const ListNumber = styled.p`
color:#385164;
`
const ButtonContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;

`
const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
font-size:.7rem;
margin:1em;
width:7vw;

height:3vh;
border-radius:5px;
border-style:solid;
border-color:black;
background:#61DBFB;
font-family:'Changa One';
cursor: pointer;
min-width:50px;
:hover{
 color:white;
 border-style:solid;
border-color:white;
 transform:scale(1.5);
 transition:.5s;
}
`
const A = styled.a`
text-decoration:none;
`
const CenterContainer = styled.div`

@media(min-width:800px){
    display:flex;
    flex-direction:row;
}
`
const TechStack = styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
margin:5%;
`
const Tech = styled.p`
margin-left:5%;
color:white;
`



const Span = styled.div`
display:flex;
justify-content:center;
`


export default function ProjectFour() {
    return (
        <ProjectTwoContainer>
            <Div></Div>
                        {/* <ProjectTitle>CMT9441v1</ProjectTitle> */}
            <ImageContainer>

            <IMG src={scribe} href="https://scribe-notes.netlify.com/transcripts"/>
            </ImageContainer>
            
        <CenterContainer>
            <DescriptionContainer>
                <H5>scribe</H5>
            <Description>
            Scribe is a web application I built with my friends. I wrote the voice recognition, and speech synthesis functionality, along with the authentication components, testing, and documentation.
            </Description>
            <ButtonContainer>
                <A href="https://github.com/scribe-notes/scribe-fe" target="_blank"><Button>FE<FaCode/></Button></A>
                <A href="https://github.com/scribe-notes/scribe-be" target="_blank"> <Button>BE<FaCode/></Button></A>
                <A href="https://scribe-notes.netlify.com/login" target="_blank"> <Button>Demo</Button></A>
                <A href="https://scribe-docs.netlify.com/" target="_blank"> <Button>Docs</Button></A>

            </ButtonContainer>
            </DescriptionContainer>
            <TechStack>
            <H5>Technologies</H5>
            <Span><ListNumber>00</ListNumber><Tech>ReactJS</Tech></Span>
           <Span><ListNumber>01</ListNumber><Tech>Redux</Tech></Span>
           <Span><ListNumber>02</ListNumber><Tech>Express</Tech></Span>
           <Span><ListNumber>03</ListNumber><Tech>MongoDB</Tech></Span>
           <Span><ListNumber>04</ListNumber><Tech>Cypress</Tech></Span>

            </TechStack>
            </CenterContainer>
            
        </ProjectTwoContainer>
    )
}
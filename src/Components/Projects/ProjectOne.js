import React from 'react'
import styled from 'styled-components'
import Game from './Game.png'
const Div = styled.div`
margin:40px;
`
const ProjectOneContainer = styled.div`
background:#011627;
height:107vh;
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
export default function ProjectOne() {
    return (

        <ProjectOneContainer>
            <Div></Div>
                        {/* <ProjectTitle>CMT9441v1</ProjectTitle> */}
            <ImageContainer>

            <IMG src={Game}/>
            </ImageContainer>
            
        <CenterContainer>
            <DescriptionContainer>
                <H5>The Project</H5>
            <Description>
                This project is a puzzle game with audio cues spread throughout the application along with clues in the old TV channels
                .With our Desktop Game application traverse the old tv channels for clues in order to reach a secret room. To traverse rooms 
                either type in room numbers or traverse with the arrowup and arrowdown keys.
            </Description>

            </DescriptionContainer>
            <TechStack>
            <H5>Technologies</H5>
            <Span><ListNumber>00</ListNumber><Tech>ReactJS</Tech></Span>
           <Span><ListNumber>01</ListNumber><Tech>ThreeJS</Tech></Span>
           <Span><ListNumber>02</ListNumber><Tech>Django</Tech></Span>
           <Span><ListNumber>03</ListNumber><Tech>Postgres</Tech></Span>

            </TechStack>
            </CenterContainer>
            
        </ProjectOneContainer>
    )
}

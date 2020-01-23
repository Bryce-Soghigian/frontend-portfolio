import React from 'react'
import styled from 'styled-components'
import Game from './Game.png'
import { FaCode } from "react-icons/fa";



const Div = styled.div`
margin:40px;
`
const ProjectOneContainer = styled.div`
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
export default function ProjectOne() {
    return (

        <ProjectOneContainer>
            <Div></Div>
                        {/* <ProjectTitle>CMT9441v1</ProjectTitle> */}
            <ImageContainer>
            <video-js style={{width:'45vw'}} id="videoPlayer" controls muted="muted" autoplay loop> 
              <source src="https://portfolio-nodejs-streams.herokuapp.com/cmt" type="video/mp4"/>
            </video-js>

            </ImageContainer>
            
        <CenterContainer>
            <DescriptionContainer>
                <H5>CMT Desktop Puzzle app</H5>
            <Description>
                    This is a project build with Django,ThreeJS,and React. You can navigate the old tv channels with the arrow keys and search for clues. Look for the auth numbers. There is a bit of scattered story in the 100 channels. Can you piece together the clues to find the secret rooms?
            </Description>
            <ButtonContainer>
                <A href="https://github.com/Bryce-Soghigian/CMT-9442V-FE" target="_blank"><Button>FE<FaCode/></Button></A>
                <A href="https://github.com/CMT-9442V/CS_BW_GAME-BE" target="_blank"> <Button>BE<FaCode/></Button></A>
                <A href="https://cmt-9442v1.netlify.com/" target="_blank"> <Button>Demo</Button></A>
            </ButtonContainer>
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

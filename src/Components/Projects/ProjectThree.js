import React from 'react'
import styled from 'styled-components'
import { FaCode } from "react-icons/fa";
import Graph from './GraphQL.png'
import Alarm from './Alarm1.png'
const ProjectThreeContainer = styled.div`
background:#011627;
/* display:flex;
justify-content:center;
flex-direction:column;
align-items:center; */
height:110vh;
`
//========GraphQL================//
const GraphQLTitle = styled.h2`

color:#ADDB67;
@media(min-width:1400px){
    font-size:3.2rem;
    margin:.5px;
}
/* @media(min-width:2000px){
    font-size:rem;
} */

`
const Project = styled.h3`
color:#ADDB67;
@media(min-width:1400px){
    font-size:3rem;
}


`
const GraphQLTop = styled.div`

`
const GraphQLContainer = styled.div`
display:flex;
flex-direction:column;
border-bottom: 1px solid #4B6478;
@media(min-width:1000px){
    flex-direction:row;
}

`
const QLDescriptionContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const QLDescription = styled.p`
color:white;
margin:5px;
@media(min-width:1400px){
    font-size:1.8rem;
}

`


//=========API Alarm Clock==============//
const KaffineCloneContainer = styled.div`
display:flex;
flex-direction:column-reverse;
@media(min-width:1000px){
    flex-direction:row;
}
`
const CloneLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const CloneRight=styled.div`

`

//======== NodeMailer===================//
const NodeMailerContainer = styled.div`

`
const IMG = styled.img`

object-fit:cover;
width:45vw;
`
const Buttons = styled.div`
display:flex;
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
background:#ADDB67;
color:white;
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
export default function ProjectThree() {
    return (
        <ProjectThreeContainer>
            <GraphQLContainer>
                <GraphQLTop>
                <GraphQLTitle>Book API</GraphQLTitle>                 
                <IMG src={Graph}/>

                </GraphQLTop>
                <QLDescriptionContainer>
                    <Project>Description</Project>
                    <QLDescription>
                        API experiment where i learned how to use GraphQLSchemas, Learned About the GraphQLObjectType, and graphQL typing while taking advantage of the convenices that come with NodeJS and Express
                    </QLDescription>
                    <A href="https://github.com/Bryce-Soghigian/GraphQL-BookAPI/blob/master/server.js" target="_blank"><Button><FaCode/></Button></A>
                </QLDescriptionContainer>
            </GraphQLContainer>
            <KaffineCloneContainer>
                <CloneLeft>
                    <Project>API Alarm</Project>
                    <QLDescription>
                        Project that keeps important apis from falling asleep due to inactivity. My Application will Ping your API every 30 minutes so it doesn't fall asleep. You have a sleepy API? add it to the list below!
                    </QLDescription>
                    <Buttons>
                    <A href="https://github.com/Bryce-Soghigian/API-ALARMCLOCK-BE" target="_blank"><Button><FaCode/></Button></A>
                    <A href="https://wake-up-api-you-are-late-for-school.netlify.com/" target="_blank"><Button>Demo</Button></A>
                    </Buttons>
                </CloneLeft>
                <CloneRight>
                <GraphQLTitle>API ALARMCLOCK</GraphQLTitle>
                <IMG src={Alarm}/>
                </CloneRight>
            </KaffineCloneContainer>
        </ProjectThreeContainer>
    )
}

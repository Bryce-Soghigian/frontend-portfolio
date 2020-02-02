import React from 'react'
import styled from 'styled-components';
import Typist from 'react-typist';
import Bryce from './Bryce.png'
import "./about.css"

const Container = styled.div`

background:#011627;

height:110vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


`
const ImageDiv = styled.div`
margin:5%;
border:solid #61DBFB 2px;
border-radius:50%;
`
const Image = styled.img`
/* 
object-fit:cover; */

width:300px;
height:300px;
border-radius:50%;

`

const H1 = styled.h1`
 color:white;
 font-family: 'Bangers';
`
const AboutDiv = styled.div`
border:solid #61DBFB 2px;
height:35vh;
width:75vw;
display:flex;



`
const AboutLeft = styled.div`
color:#61DBFB;
width:37.5vw;
height:35vh;

`

const AboutRight = styled.div`
background-image: url("./blob.svg");
color:#61DBFB;
width:37.5vw;
height:35vh;


`
const H3 = styled.h3`
color:#61DBFB;


`
const Li = styled.p`
color:#61DBFB;
text-transform:uppercase;
text-decoration:underline;
`
const A = styled.a`
color:#61DBFB;
:visited{
    color:#61DBFB;
}

`
export default function About() {
    const CursorProps ={
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 300,
    }

    return (
        <Container className="test2">
            <div >
                <H1>I AM</H1>

                <Typist className="description" cursor={CursorProps}>A drone hobbist<Typist.Backspace count={24} delay={1000}/>
            <Typist.Delay ms={1500}/>
            A Culinary Expert<Typist.Backspace count={17} delay={2000}/>
            <Typist.Delay ms={2500}/>
            A Physics Nerd<Typist.Backspace count={16} delay={3000}/>
            <Typist.Delay ms={3500}/>
            A Workaholic<Typist.Backspace count={21} delay={4000}/>
            <Typist.Delay ms={4500}/>
            A Math Fanatic<Typist.Backspace count={16} delay={5000}/>
            <Typist.Delay ms={5500}/>
            A Programmer<Typist.Backspace count={15} delay={6000}/>
            <Typist.Delay ms={6500}/>
            A Fullstack Web Developer
            </Typist>
            </div>
            <ImageDiv>
            <Image src={Bryce}/>
            </ImageDiv>
                <AboutDiv>
                    <AboutLeft>
                                    <H3>About Me</H3>
                            <p>I am a software engineer looking to relocate to some large city! I like cooking, drones, programming ,and reading.</p>
                    </AboutLeft>
                    <AboutRight className="test">
                        <H3>Socials?</H3>
                        <A href="https://github.com/Bryce-Soghigian" target = "_blank"><Li>Github</Li></A>
                        <A href="https://www.linkedin.com/in/bsoghigian/" target="_blank"><Li>LInkedIn</Li></A>
                        <A href="https://twitter.com/brybrycodingguy" target="_blank"><Li>Twitter</Li></A>
                    </AboutRight>
                </AboutDiv>
        </Container>
    )
}

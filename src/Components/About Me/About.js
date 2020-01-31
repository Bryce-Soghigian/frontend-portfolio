import React from 'react'
import styled from 'styled-components';
import Typist from 'react-typist';
import Bryce from './Bryce.png'
const Container = styled.div`

background:#011627;
height:93vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


`
const ImageDiv = styled.div`

`
const Image = styled.img`

object-fit:cover;
border-radius:50%;

`

const H1 = styled.h1`
 color:white;
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
        <Container>
            <div>
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
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </Container>
    )
}

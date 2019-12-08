import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import 'babel-polyfill';
import "./Home.css"
const MainDiv = styled.div`
background:#011627;
height:93vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const Header = styled.h1`
color:#61DBFB;
margin:0;
font-family: 'Fira Code';
`

export default function Home() {

    return (
        <MainDiv>
            <Header>Bryce Soghigian</Header>
            
            {/* <Typist className="description">Fullstack Web Developer<Typist.Backspace count={24} delay={1000}/>
            <Typist.Delay ms={2000}/>
            ThreeJS Developer<Typist.Backspace count={17} delay={2800}/>
            <Typist.Delay ms={3500}/>
            NodeJS Developer<Typist.Backspace count={16} delay={4100}/>
            <Typist.Delay ms={4600}/>
            Javascript Developer<Typist.Backspace count={21} delay={5600}/>
            <Typist.Delay ms={6100}/>
            Python Developer<Typist.Backspace count={15} delay={6700}/>
            <Typist.Delay ms={7300}/>
            React Developer<Typist.Backspace count={14} delay={8000}/>
            <Typist.Delay ms={8500}/>
            Fullstack Web Developer
            </Typist> */}
                        <Typist className="description">Fullstack Web Developer<Typist.Backspace count={24} delay={1000}/>
            <Typist.Delay ms={1500}/>
            ThreeJS Developer<Typist.Backspace count={17} delay={2000}/>
            <Typist.Delay ms={2500}/>
            NodeJS Developer<Typist.Backspace count={16} delay={3000}/>
            <Typist.Delay ms={3500}/>
            Javascript Developer<Typist.Backspace count={21} delay={4000}/>
            <Typist.Delay ms={4500}/>
            Python Developer<Typist.Backspace count={16} delay={5000}/>
            <Typist.Delay ms={5500}/>
            React Developer<Typist.Backspace count={15} delay={6000}/>
            <Typist.Delay ms={6500}/>
            Fullstack Web Developer
            </Typist>

        </MainDiv>
    )
}

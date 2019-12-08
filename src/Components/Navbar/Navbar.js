import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
display:flex;
width:100vw;
background:#011627;
/* border-bottom: 5px #4B6478; */
`
const Left = styled.div`
display:flex;
justify-content:start;
width:50vw;

background:#011627;
border-bottom: 3px solid #4B6478;
`
const Right = styled.div`
width:50vw;

display:flex;
flex-direction:row-reverse;
justify-content:end;
align-items:center;
background:#011627;
border-bottom: 3px solid #4B6478;
`
const Name = styled.p`
/* margin:5px; */
display:flex;
justify-content:center;
align-items:center;
color:white;
text-transform:uppercase;
font-family: 'Changa One';

`

const NavItem = styled(Link)`
display:flex;
margin:5px;
color:#4B6478;
font-family: 'Changa One';
text-decoration:none;
:hover{
    transition:0.5s;
    color:white;
}
`

export default function Navbar() {
    return (
            <Container>
                <Left>
                    <Name>Bryce Soghigian</Name>
                </Left>
                <Right>
                        <NavItem>Projects</NavItem>
                        <NavItem>Contact</NavItem>
                        
                </Right>
            </Container>
    )
}

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 7vh;
  background: #011627;
  /* border-bottom: 5px #4B6478; */
`;
const Left = styled.div`
  display: flex;
  justify-content: start;
  width: 50vw;

  background: #011627;
  border-bottom: 1px solid #4b6478;
`;
const Right = styled.div`
  width: 50vw;

  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
  align-items: center;
  background: #011627;
  border-bottom: 1px solid #4b6478;
`;
const Name = styled(Link)`
  /* margin:5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-family: "Changa One";
  text-decoration: none;
  margin: 5px;
  @media (min-width: 1700px) {
    font-size: 3rem;
  }
  :hover {
    transition: 0.5s;
    color: #61dafb;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  margin: 5px;
  @media (min-width: 800px) {
    margin-right: 20px;
  }

  color: #4b6478;
  font-family: "Changa One";
  text-decoration: none;
  @media (min-width: 1700px) {
    font-size: 2rem;
  }
  :hover {
    transition: 0.5s;
    color: white;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Left>
        <Name to="/">Bryce Soghigian</Name>
      </Left>
      <Right>

        <NavItem to="/Contact">Contact</NavItem>
        <NavItem to="/Skills">Skills</NavItem>
        <NavItem to ="/About">About</NavItem>
        <NavItem to="/Projects">Projects</NavItem>
      </Right>
    </Container>
  );
}

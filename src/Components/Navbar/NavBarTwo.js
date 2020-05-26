import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";

//========Styles==========
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 7vh;
  background: #011627;

  color: #4b6478;
  /* border-bottom: 5px #4B6478; */
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
//==========Component======================
export default class NavBarTwo extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Menu
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}>
          <main id="page-wrap">
            <NavItem to="/Projects">Projects</NavItem>
            <NavItem to="/About">About</NavItem>
            <NavItem to="/Skills">Skills</NavItem>
            <NavItem to="/Contact">Contact</NavItem>
          </main>
        </Menu>
        <Projects />
      </Container>
    );
  }
}

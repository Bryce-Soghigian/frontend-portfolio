import React, { useEffect } from "react";
import styled from "styled-components";
import Typist from "react-typist";
import axios from "axios";
import "babel-polyfill";
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
import BuiltWithReact from "./BuiltWithReact";
import { Link } from "react-router-dom";
// import Connect from './Connect'
import "./Home.css";
const MainDiv = styled.div`
  background: #011627;
  height: 93vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled(Link)`
  display: flex;
  margin: 5px;
  text-transform: bold;
  font-size:1.3rem;
  margin:2em;
  color: white;
  font-family: "Changa One";
  text-decoration: none;
  @media (min-width: 1700px) {
    font-size: 2rem;
  }
  :hover {
    transition: 0.5s;
    color: #61dbfb;
  }
`;
const Header = styled.h1`
  color: #61dbfb;
  margin: 6.5%;
  @media (min-width: 600px) {
    margin: 3.5%;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
  }
  @media (min-width: 1500px) {
    font-size: 5rem;
  }
  @media (min-width: 1700px) {
    font-size: 7rem;
  }
  font-family: "Fira Code";
`;
const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 7%;
  @media (max-width: 500px) {
    width: 15%;
  }
  @media (max-width: 1700px) {
    width: 20%;
  }
`;
const Linked = styled.a`
  font-size: 1rem;
  color: #61dbfb;
  margin: 5%;
  :visited {
    color: #61dbfb;
  }
  :hover {
    transform: scale(1.25);
    transition: 1s;
    color: white;
  }
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const Github = styled.a`
  color: #61dbfb;
  font-size: 1rem;
  margin: 5%;
  :visited {
    color: #61dbfb;
  }
  :hover {
    transform: scale(1.25);
    transition: 0.7s;
    color: white;
  }
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
  @media (min-width: 1500px) {
    font-size: 3rem;
  }
  @media (min-width: 1700px) {
    font-size: 5rem;
  }
`;
const ImageDiv = styled.div`
  margin: 5%;
  border: solid #61dbfb 5px;
  border-radius: 50%;
  @media (min-width: 600px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  /* 
object-fit:cover; */

  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
const Links = styled.div`
display: flex;
justify-content: center;
align-items:center;
`
export default function Home() {
  //========Waking up our apis==============//
  useEffect(() => {
    axios
      .get("https://portfolio-nodejs-streams.herokuapp.com/awake")
      .then(res => {

        console.log("Made request");
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://ourtvgame.herokuapp.com/api/adv/initialize")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };
  return (
    <MainDiv>
      <Header>Bryce Soghigian</Header>
      <ImageDiv>
        {/* <Image src="https://i.imgur.com/G42HY0i.jpg" /> */}
        <Image src="https://i.imgur.com/4tYKhwK.jpg" />
      </ImageDiv>
      <Typist className="description" cursor={CursorProps}>
        Fullstack Web Developer
        <Typist.Backspace count={24} delay={100} />
        <Typist.Delay ms={150} />
        ThreeJS Developer
        <Typist.Backspace count={17} delay={200} />
        <Typist.Delay ms={250} />
        NodeJS Developer
        <Typist.Backspace count={16} delay={300} />
        <Typist.Delay ms={350} />
        Javascript Developer
        <Typist.Backspace count={21} delay={400} />
        <Typist.Delay ms={450} />
        Python Developer
        <Typist.Backspace count={16} delay={500} />
        <Typist.Delay ms={550} />
        React Developer
        <Typist.Backspace count={15} delay={600} />
        <Typist.Delay ms={650} />
        Fullstack Web Developer
      </Typist>
      <Links>
      <NavItem to="/Projects">Projects</NavItem>
      <NavItem to="/Skills">Skills</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      </Links>
      <SocialsContainer>
        <Linked href="https://www.linkedin.com/in/bsoghigian/" target="_blank">
          <FaLinkedin />
        </Linked>
        <Github href="https://github.com/Bryce-Soghigian" target="_blank">
          <FaGithubSquare />
        </Github>
        <Github href="mailto: bsoghigian@gmail.com" target="_blank">
          <FaMailBulk />
        </Github>
      </SocialsContainer>
      <BuiltWithReact />
      {/* <Connect /> */}
    </MainDiv>
  );
}

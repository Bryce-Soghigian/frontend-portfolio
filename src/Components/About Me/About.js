import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Bryce from "./Bryce.png";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Container = styled.div`
  background: #011627;
  overflow-x: hidden;
  height: 120vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageDiv = styled.div`
  margin: 5%;
  border: solid #61dbfb 5px;
  border-radius: 50%;
`;
const Image = styled.img`
  /* 
object-fit:cover; */

  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const H1 = styled.h1`
  color: white;
  font-family: "Bangers";
`;
const AboutDiv = styled.div`
  /* border:solid #61DBFB 2px; */
  display: flex;
  width: 80vw;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  color: #61dbfb;
  font-size: 3rem;
  margin: 5%;
  :visited {
    color: #61dbfb;
  }
  :hover {
    transform: scale(1.2);
    color: white;
  }
`;
export default function About() {
  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };

  return (
    <Container className="test2">
      <div>
        <H1>I AM</H1>

        <Typist className="description" cursor={CursorProps}>
          A drone hobbist
          <Typist.Backspace count={24} delay={1000} />
          <Typist.Delay ms={1500} />
          A Culinary Expert
          <Typist.Backspace count={17} delay={2000} />
          <Typist.Delay ms={2500} />
          A Physics Nerd
          <Typist.Backspace count={16} delay={3000} />
          <Typist.Delay ms={3500} />
          A Workaholic
          <Typist.Backspace count={21} delay={4000} />
          <Typist.Delay ms={4500} />
          A Math Fanatic
          <Typist.Backspace count={16} delay={5000} />
          <Typist.Delay ms={5500} />
          A Programmer
          <Typist.Backspace count={15} delay={6000} />
          <Typist.Delay ms={6500} />A Fullstack Web Developer
        </Typist>
      </div>
      <ImageDiv>
        <Image src={Bryce} />
      </ImageDiv>
      <AboutDiv>
        <A href="https://github.com/Bryce-Soghigian" target="_blank">
          <FaGithub />
        </A>
        <A href="https://www.linkedin.com/in/bsoghigian/" target="_blank">
          <FaLinkedin />
        </A>

        <A
          href="https://docs.google.com/document/d/1h88tzouRqqVw_qy-c3MAhTSCiiyhajs4RRe7rriLAEc/edit?usp=sharing"
          target="_blank">
          <FaFileAlt />
        </A>
      </AboutDiv>
    </Container>
  );
}

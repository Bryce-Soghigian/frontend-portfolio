import React from "react";
import styled from "styled-components";
import { FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiGo,
  SiDjango,
  SiPostgresql,
  SiKubernetes,
  SiRedis,
  SiJavascript,
  SiPython,
} from "react-icons/si";
export default function BackendHome() {
  const BackendContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;
  const BackendTitle = styled.h1`
    color: #61dbfb;
    font-size: 4rem;
  `;
  const H3 = styled.h3`
    color: #61dbfb;
  `;
  const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    font-size: 1rem;
    gap:5rem;
    margin:1.7rem;
  `;
  const Node = styled.div`
    color: #68a063;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `;
  const Go = styled.div`
    color: #61dbfb;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `;
  const Djan = styled.div`
    color: #038515;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `;
  const Pg = styled.div`
    color: #32648e;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `;
  const Dock = styled.div`
    color: #1e90ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `;
  const Js = styled.div`
  color:#f7df1e;
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `
  const Py = styled.div`
  color:#FFD546;
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  
  `
  const Aws = styled.div`
  color:#FFC502;
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  
  `
  const Kub = styled.div` 
  color:#02B3FF;
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `
  const Red = styled.div`
  color:#C70039;
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    @media (min-width: 1500px) {
      font-size: 4rem;
    }
    @media (min-width: 1700px) {
      font-size: 6rem;
    }
  `
  return (
    <BackendContainer>
      <TopContainer>
        <BackendTitle>Backend Development</BackendTitle>
        <H3>Apis and other server-side projects</H3>
        <Icons>
          <Node>
            <FaNodeJs />
          </Node>
          <Go>
            <SiGo />
          </Go>
          <Djan>
            <SiDjango />
          </Djan>
          <Pg>
            <SiPostgresql />
          </Pg>
          <Js>
              <SiJavascript />
          </Js>
          <Dock>
            <FaDocker />
          </Dock>
        <Kub>
        <SiKubernetes />
        </Kub>
          <Red>
          <SiRedis />
          </Red>
          <Aws>
          <FaAws />

          </Aws>
          <Py>
          <SiPython />

          </Py>
        </Icons>
      </TopContainer>
    </BackendContainer>
  );
}

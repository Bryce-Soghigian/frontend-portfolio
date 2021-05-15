import React from "react";
import styled from "styled-components";
import { FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import BackButton from "../BackButton";
import {
  SiGo,
  SiDjango,
  SiPostgresql,
  SiKubernetes,
  SiRedis,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import Project from "../Project";

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
    border-bottom: 1px solid #4b6478;
  `;
  const BackendTitle = styled.h1`
    color: #61dbfb;
    font-size: 4rem;
    font-family: "Fira Code";
  `;
  const H3 = styled.h3`
    color: #61dbfb;
    font-family: "Fira Code";
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
      <Project
      delay={150}
      importName="const server = require('express')"
      tech="Express | NodeJS | Posgresql"
      title="Nasa Exoplanets Api"
      description="An api i built to serve the data nasa collected on exoplanets.It features 86 columns of data on 5,000 planets."
      icons={[{color:"#f7df1e",icon:<FaNodeJs />},{icon:<SiPostgresql />,color:"#32648e"}]}
      imageUrl="https://i.imgur.com/WH3wVx5.jpg"
      links={[{src:"https://nasa-exoplanet-kepler-api.herokuapp.com/static/",body:"Docs"},{src:"https://github.com/Bryce-Soghigian/nasa-exoplanets-api",body:"Code"}]}
      />
      <Project
      delay={2000}
      importName="'npm install pg knex'"
      tech="Express | NodeJS | Posgresql"
      title="Watchlist Api"
      description="An api I wrote that allows you to publish reviews on your favorite shows are compare your list to users on your friends list. "
      icons={[{icon:<SiPostgresql />,color:"#32648e"},{color:"#f7df1e",icon:<FaNodeJs />}]}
      links={[{src:"https://github.com/Bryce-Soghigian/list-api",body:"Code"}]}
      imageUrl="https://i.imgur.com/5kY1iRL.png"
      />
      <Project
      delay={3000}
      importName="pip3 install flask"
      tech="Python | Flask" 
      title="Blockchain/Crypto app"
      imageUrl="https://i.imgur.com/PvCiTxI.jpg"
      icons={[{icon:<SiPython />,color:"#FFD546"}]}
      links={[{src:"https://github.com/Bryce-Soghigian/Blockchain",body:"Code"}]}
      description="This project I explored hashing algorithms and validating a blockchain. I wrote code that allows you to mine hashes from my custom blockchain data structure."
      />
      <Project
      delay={4000}
      icons={[{icon:<FaDocker />,color:"#1e90ff"},{icon:<SiGo />,color:"#61dbfb"},{icon:<SiPostgresql />,color:"#32648e"}]}
      imageUrl="https://i.imgur.com/LrXuysj.png"
      importName="go mod init Bryce/items-go"
      tech="Golang | Docker | Posgresql"
      title="Go items Api"
      description="Go C.R.U.D. api that is hosted in a docker container. Followed the model controller pattern. I used this project to learn about go and docker"
      links={[{src:"https://github.com/Bryce-Soghigian/items-go",body:"Code"}]}
      />
      <Project
      delay={5000}
      imageUrl="https://i.imgur.com/g5QLxkr.png"
      icons={[{color:"#f7df1e",icon:<FaNodeJs />}]}
      links={[{src:"https://github.com/Bryce-Soghigian/portfolio-video-api",body:"Code"}]}
      title="NodeJS Video Streaming Api"
      importName="const app = require('express')"
      tech="NodeJS | Express"
      description="Video streaming api that streams videos to my applications"
      />
      <BackButton />
    </BackendContainer>
  );
}

import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
export default function Project(props) {
  /**
      delay={150}
      importName="const server = require('express')"
      tech="Express | NodeJS | Posgresql"
      title="Nasa Exoplanets Api"
      description="An api i built to serve the data nasa collected on exoplanets.It features 86 columns of data on 5,000 planets."
      icons={[{color:"#f7df1e",icon:<FaNodeJs />},{icon:<SiPostgresql />,color:"#32648e"}]}
      imageUrl="https://i.imgur.com/WH3wVx5.jpg"
      links={[{src:"https://nasa-exoplanet-kepler-api.herokuapp.com/static/",body:"Docs"},{src:"https://github.com/Bryce-Soghigian/nasa-exoplanets-api",body:"Code"}]}
   */

  const H1 = styled.h1`
    color: #61dbfb;
  `;

  const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    margin: 1em;
    width: 7vw;

    height: 3vh;
    border-radius: 5px;
    border-style: solid;
    border-color: black;
    background: #61dbfb;
    font-family: "Changa One";
    cursor: pointer;
    min-width: 50px;
    :hover {
      color: white;
      border-style: solid;
      border-color: white;
      transform: scale(1.5);
      transition: 0.5s;
    }
  `;
  const Bottom = styled.div`
    height: 10vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border:solid #61dbfb 2px;
border-radius: 10px; */
    margin: 10px;
  `;
  const ImageContainer = styled.img`
    object-fit: cover;
    width: 40vw;
    margin: 5%;
    transition: all 0.2s ease-in-out;
  `;
  const Middle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Left = styled.div``;
  const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    margin: 50px;
  `;
  const ProjectContainer = styled.div`
    width: 100vw;
    height: 93vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #4b6478;
  `;
  const P = styled.p`
    color: white;
    padding: 10px;
    width: 75%;
    :visited {
      color: #61dafb;
    }
  `;
  const H3 = styled.h3`
    color: white;
  `;
  const A = styled.a`
  text-decoration:none;
  color:none;

  `
  const CursorProps = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };
  return (
    <ProjectContainer>
      <Middle>
        <Left>
          <ImageContainer src={props.imageUrl} />
        </Left>
        <Right>
          <Typist className="Project2" cursor={CursorProps}>
            <Typist.Delay ms={props.delay} />
            {props.importName}
          </Typist>
          <H1>{props.title}</H1>
          <H3>{props.tech}</H3>
          <P>{props.description}</P>
          <Icons>
            {props.icons.map(icon => {
              const obj = {
                color: icon.color,
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0.5rem",
              };
              return <div style={obj}>{icon.icon}</div>;
            })}
          </Icons>
          <Bottom>
            {props.links.map(x => {
              //{src:"",}
              console.log(x,"LINKS INSIDE Links props")
              return (
                <>
                  <A href={x.src} target="_blank">
                    <Button >
                      {x.body}
                    </Button>
                    
                  </A>
                </>
              );
            })}
          </Bottom>
        </Right>
      </Middle>
    </ProjectContainer>
  );
}

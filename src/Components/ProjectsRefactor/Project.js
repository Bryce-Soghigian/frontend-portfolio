import React from "react";
import styled from "styled-components";

export default function Project(props) {
  /**
   * show= bool
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
    flex-direction:column;
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
  `;
  const P = styled.p`
    color: white;
    padding: 10px;
    width: 75%;
    :visited {
      color: #61dafb;
    }
  `;
  return (
    <ProjectContainer>

      <Middle>
        <Left>
          <ImageContainer src={props.imageUrl} />
        </Left>
        <Right>
        <H1>{props.title}</H1>
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
          return <Button href={props.src}>{x.body}</Button>;
        })}
      </Bottom>
        </Right>
      </Middle>
    </ProjectContainer>
  );
}

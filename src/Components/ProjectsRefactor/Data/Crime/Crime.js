import React from "react";
import styled from "styled-components";
import { FaCode } from "react-icons/fa";
export default function Crime() {
  const Container = styled.div`
    background: #011627;
    height: 93vh;
    width: 100vw;
    border-bottom: 1px solid #4b6478;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Left = styled.div`
    width: 50vw;
  `;
  const Right = styled.div``;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
  const A = styled.a`
    text-decoration: none;
  `;
  const H3 = styled.h3`
    color: #61dbfb;
  `;
  const Description = styled.p`
    color: white;
    width: 100%;
    border-left: white 4px solid;
  `;

  return (
    <Container>
      <Left>
        <H3>Crime Statistics For Travelers</H3>
        <Description>
          I wrote the code for the map functionality using Mapbox, and React. I
          also wrote the map style swap code, the data filtering, auth0 login
          functionality, Geolocation searching, along with all the data
          visualization present in our application
        </Description>
        <ButtonContainer>
          <A
            href="https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-fe"
            target="_blank">
            <Button>
              FE
              <FaCode />
            </Button>
          </A>
          <A
            href="https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-be"
            target="_blank">
            {" "}
            <Button>
              BE
              <FaCode />
            </Button>
          </A>
          <A href="https://crimestatsfortravelers.com/" target="_blank">
            {" "}
            <Button>Demo</Button>
          </A>
          <A
            href="https://www.notion.so/Crime-Statistics-for-Travelers-a7e69847024d4cdc85aaf85cb413df71"
            target="_blank">
            <Button>PVD</Button>
          </A>
        </ButtonContainer>
      </Left>
      <Right>
        <ImageContainer>
          <video
            style={{ width: "55vw" }}
            id="videoPlayer"
            controls
            muted="muted"
            autoplay
            loop>
            <source
              src="https://portfolio-nodejs-streams.herokuapp.com/byname/Crime"
              type="video/mp4"
            />
          </video>
        </ImageContainer>
      </Right>
    </Container>
  );
}

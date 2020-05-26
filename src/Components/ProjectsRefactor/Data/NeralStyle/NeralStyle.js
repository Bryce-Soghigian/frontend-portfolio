import React from "react";
import Carousel from "./Carousel";
import styled from "styled-components";
import { FaPython } from "react-icons/fa";
export default function NeralStyle() {
  const StyleTransferContainer = styled.div`
    background: #011627;
    height: 93vh;
    width: 100vw;
    border-bottom: 1px solid #4b6478;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* @media (min-width: 800px) {
      background: #011627;
      height: 93vh;
      width: 100vw;
      border-bottom: 1px solid #4b6478;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    } */
  `;
  const Right = styled.div``;
  const Left = styled.div``;
  const Description = styled.p`
    color: white;
    padding: 10px;
    border-left: 4px solid white;
    :visited {
      color: #61dafb;
    }
    /* @media (min-width: 800px) {
      border: none;
    } */
  `;
  const Title = styled.h3`
    color: #61dbfb;
  `;
  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
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
  const imageArray = [
    "https://raw.githubusercontent.com/Bryce-Soghigian/style-transfer-with-spell/master/images/picaso.jpg",
    "https://raw.githubusercontent.com/Bryce-Soghigian/style-transfer-with-spell/master/images/dancing.jpeg",
    "https://i.imgur.com/D16NpGE.png",
  ];
  const nameArray = ["Content Image", "Style Image", "New Image Made"];
  return (
    <StyleTransferContainer>
      <Left>
        <Title>
          <FaPython />
          Fast Neral Transfer
          <FaPython />{" "}
        </Title>
        <Description>
          I wrote some python that learns the artistic style of a style image,
          and will redraw a content image with that style.
        </Description>
        <ButtonsContainer>
          <A
            href="https://github.com/Bryce-Soghigian/style-transfer-with-spell/blob/master/main.py"
            target="_blank">
            <Button>Code</Button>
          </A>
          <A
            href="https://github.com/Bryce-Soghigian/style-transfer-with-spell/blob/master/README.md"
            target="_blank">
            <Button>Result</Button>
          </A>
        </ButtonsContainer>
      </Left>
      <Right>
        <Carousel images={imageArray} imageName={nameArray} />
      </Right>
    </StyleTransferContainer>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
export default function Carousel(props) {
  let imageArray = props.images;
  let imageName = props.imageName;
  const [currentIndex, setCurrentIndex] = useState(0);
  const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border:white solid 2px; */
  `;
  const ImageContainer = styled.div``;
  const CarouselButton = styled.button`
    height: 4vh;
    width: 4vw;
    margin-left: 20px;
    font-size: 1rem;
    color: #61dbfb;
    background: #011627;
    border: none;
  `;
  const Image = styled.img`
    object-fit: cover;
    width: 39vw;
    /* margin: 5%; */
    transition: all 0.2s ease-in-out;
    /* :hover {
      transform: scale(1.1);
    } */
  `;

  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
  `;
  const ImageTitle = styled.h3`
    color: white;
  `;
  const IncrementImage = () => {
    if (currentIndex === imageArray.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const DecrementImage = () => {
    console.log(imageArray.length, "iamge arr");
    if (currentIndex === 0) {
      return setCurrentIndex(imageArray.length - 1);
    } else {
      return setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <CarouselContainer>
      <ImageTitle>{imageName[currentIndex]}</ImageTitle>
      <ImageContainer>
        <Image src={imageArray[currentIndex]} />
      </ImageContainer>
      <ButtonsContainer>
        <CarouselButton onClick={DecrementImage}>
          {" "}
          <IoIosArrowDropleftCircle />{" "}
        </CarouselButton>
        <CarouselButton onClick={IncrementImage}>
          {" "}
          <IoIosArrowDroprightCircle />{" "}
        </CarouselButton>
      </ButtonsContainer>
    </CarouselContainer>
  );
}

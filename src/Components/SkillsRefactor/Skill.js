import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
export default function Skill(props) {
  const SkillName = styled.h3`
    color: ${props.color};
  `;
  const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: ${props.color};
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
  const SkillsText = styled.h2`
    font-size: 3rem;
    color: white;
    font-family: "Changa One";
    text-transform: bold;
    margin: 0;
    margin-top:50px;
  `;
  const CursorProps = {
    show: true,
    blink: true,
    element: "▋",
    hideWhenDone: true,
    hideWhenDoneDelay: 300,
  };
  const SkillsContainer = styled.div`
    margin: 4em;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  `;
  if (props.isSkillsText === true) {
    return <SkillsText>SKills</SkillsText>;
  } else {
    return (
      <SkillsContainer>
        <IconWrapper>{props.icon}</IconWrapper>
        <SkillName>
          <Typist cursor={CursorProps}>{props.skillName}</Typist>
        </SkillName>
      </SkillsContainer>
    );
  }
}

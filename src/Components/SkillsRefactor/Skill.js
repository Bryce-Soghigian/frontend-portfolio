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
  `;
  const BlueSquare = styled.div`
    width: 5vw;
  `;
  const SkillsText = styled.h1`
    font-size: 5rem;
    color: white;
    font-family: "Changa One";
    text-transform: bold;
    margin: 0;
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

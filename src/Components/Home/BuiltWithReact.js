import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
export default function BuiltWithReact() {
  const BuiltWithReactContainer = styled.div`
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    right: 5%;
    bottom: 5%;
  `;
  const H3 = styled.h3`
    color: #61dbfb;
  `;
  const IconContainer = styled.div`
    color: #61dbfb;
    font-size: 1rem;
    @media (min-width: 1000px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1500px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1700px) {
      font-size: 4.5rem;
    }
  `;

  return (
    <BuiltWithReactContainer>
      <H3>Built with</H3>
      <IconContainer>
        <FaReact />
      </IconContainer>
    </BuiltWithReactContainer>
  );
}

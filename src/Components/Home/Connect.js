import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Connect() {
  const BuiltWithReactContainer = styled.div`
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    right: 82%;
    top: 13%;
  `;
  const H3 = styled(Link)`
    color: #61dbfb;
    margin: 10px;
    text-decoration: none;
    :hover {
      transition: 0.5s;
      color: white;
    }
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
      <H3 to="/Schedule">Let's_Talk!</H3>
      <IconContainer>
        <FaReact />
      </IconContainer>
    </BuiltWithReactContainer>
  );
}

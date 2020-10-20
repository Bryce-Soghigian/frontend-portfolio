import React from "react";
import styled from "styled-components";
import ModalStartState from "./Calendar/Day/Modal/ModalStartState";
import ModalEndState from './Calendar/Day/Modal/ModalEndState'
export default function ScheduleHome() {
  const ScheduleContainer = styled.div`
    background: #011627;
    height: 93vh;
    width: 100vw;
  `;
  return (
    <ScheduleContainer>
      <ModalStartState />
      <ModalEndState />
    </ScheduleContainer>
  );
}

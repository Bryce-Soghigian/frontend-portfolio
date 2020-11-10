import React from "react";
import styled from "styled-components";
import ModalStartState from "./Calendar/Day/Modal/ModalStartState";
import ModalEndState from "./Calendar/Day/Modal/ModalEndState";
import DatePicker from "./Calendar/DateRangeComponents/DatePicker";
import Calendar from "./Calendar/Calendar";
export default function ScheduleHome() {
  const lightblue = "#CAF4F4";

  const ScheduleContainer = styled.div`
    /* background:${lightblue}; */
    z-index: 1;
    height: 93vh;
    width: 100vw;
    @media (max-width: 500px) {
      height: 175vh;
    }
  `;
  const H1 = styled.h3`
    color: white;
    font-family: "Changa One";
    text-shadow: 1px 1px black;
    text-transform: uppercase;
  `;
  return (
    <ScheduleContainer>
      <DatePicker />
      <H1>
        Like what you see? Please select a time you would like to meet with me
        below!
      </H1>
      <Calendar />
      <ModalStartState />
      <ModalEndState />
    </ScheduleContainer>
  );
}

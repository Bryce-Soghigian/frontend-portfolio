import React,{useContext,useEffect} from "react";
import styled from "styled-components";
import ModalStartState from "./Calendar/Day/Modal/ModalStartState";
import ModalEndState from './Calendar/Day/Modal/ModalEndState'
import axios from 'axios'
import {GlobalContext} from '../../contexts'
export default function ScheduleHome() {
  const {state,dispatch} = useContext(GlobalContext)

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

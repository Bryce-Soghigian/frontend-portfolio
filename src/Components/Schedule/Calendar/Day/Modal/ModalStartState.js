import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../../contexts";
import {convertToAmOrPm} from '../../../../../utils/Convert'
export default function ModalStartState(props) {
  const { dispatch, state } = useContext(GlobalContext);
  const blue = "#045FB6";
  const lightblue = "#61dbfb";
  const yesClick = () => {
    dispatch({ type: "displayModalStartFalse" });
    dispatch({ type: "displayModalEndTrue" });
  };
  const noClick = () => {
    dispatch({ type: "displayModalStartFalse" });
  };
  const ModalContainer = styled.div`
    font-family: "Changa One";
    z-index: 2;
    background: ${blue};
    position: fixed;
    top: 50%;
    left: 50%;
    height: 30vh;
    width: 30vw;
    transform: translate(-50%, -50%);
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    border-style: solid;
    border-color: black;
    text-shadow: 1px 1px black;
  `;
  const Top = styled.div`
    text-align: center;
    color: ${lightblue};
  `;
  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Button = styled.button`
    font-size: 0.7rem;
    margin: 1em;
    width: 9vw;
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
  const Empty = styled.div`
    display: none;
  `;
  if (state.displayModalStart) {
    return (
      <ModalContainer>
        <Top>
          <p>Schedule a meeting</p>
          <p>for {state.currentMeetingTime.meetingDate}</p>

          <p>at {convertToAmOrPm(state.currentMeetingTime.time)}?</p>
        </Top>
        <ButtonsContainer>
          <Button onClick={yesClick}>Yes</Button>
          <Button onClick={noClick}>No</Button>
        </ButtonsContainer>
      </ModalContainer>
    );
  } else {
    return <Empty></Empty>;
  }
}

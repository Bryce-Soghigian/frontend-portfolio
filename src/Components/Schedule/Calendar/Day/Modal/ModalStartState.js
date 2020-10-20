import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../../contexts";
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
    background: ${blue};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5%;
    border-color: black;
  `;
  const Top = styled.div`
    text-align: center;
    color: ${lightblue};
  `;
  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const YesButton = styled.button``;
  const NoButton = styled.button``;
  const Empty = styled.div`
    display: none;
  `;
  if (state.displayModalStart) {
    return (
      <ModalContainer>
        <Top>
          <p>Schedule a meeting</p>
          <p>for</p>
          <p>{state.currentMeetingTime}?</p>
        </Top>
        <ButtonsContainer>
          <YesButton onClick={yesClick}>Yes</YesButton>
          <NoButton onClick={noClick}>No</NoButton>
        </ButtonsContainer>
      </ModalContainer>
    );
  } else {
    return <Empty></Empty>;
  }
}

import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../contexts";
import {convertToAmOrPm} from '../../../../utils/Convert'
export default function SuggestedTime(props) {
  const { dispatch } = useContext(GlobalContext);
  let payloadObject = {
    time: props.meetingTimeStart,
    meetingDate: props.newDate,
    fullDate: props.currentDate,
  };
  const triggerModal = () => {
    dispatch({
      type: "updateCurrentMeetingTime",
      payload: payloadObject,
    });
    dispatch({ type: "displayModalStartTrue" });
  };

  const StyledButton = styled.button`
    /* border-radius: 5%; */
    background: "#1e90ff";
    border: none;
    border-left: #61dbfb 5px solid;
    width: 90%;
    height: 5vh;
    margin: 2%;
    color: "#61dbfb";

    border-color: "#61dbfb";
    ::hover() {
      transform: scale(1.1);
    }
    @media (max-width: 500px) {
      width: 30vw;
      border-radius: 0%;
    }
  `;

  convertToAmOrPm(props.meetingTimeStart);
  return (
    <StyledButton onClick={triggerModal}>
      {convertToAmOrPm(props.meetingTimeStart)}
    </StyledButton>
  );
}

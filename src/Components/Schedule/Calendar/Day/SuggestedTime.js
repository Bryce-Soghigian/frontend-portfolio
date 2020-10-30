import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../contexts";
export default function SuggestedTime(props) {
  const { dispatch } = useContext(GlobalContext);
  let payloadObject = {
    time: props.meetingTimeStart,
    meetingDate: props.newDate,
    fullDate: props.currentDate
  }
  console.log(payloadObject,"payloadObj")
  const triggerModal = () => {
    dispatch({
      type: "updateCurrentMeetingTime",
      payload: payloadObject,
    });
    dispatch({ type: "displayModalStartTrue" });
  };

  const StyledButton = styled.button`
    border-radius: 5%;
    background: "#1e90ff";
    border:none;
    border-left:dodgerblue 5px solid;
    width: 90%;
    height:5vh;
    margin:2%;
    color: "#61dbfb";
    
    border-color: "#61dbfb";
    ::hover() {
      transform: scale(1.1);
    }
  `;
  return (
    <StyledButton onClick={triggerModal}>
      {`${props.meetingTimeStart}`}
    </StyledButton>
  );
}

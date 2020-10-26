import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../contexts";
export default function SuggestedTime(props) {
  const { dispatch } = useContext(GlobalContext);
  const triggerModal = () => {
    dispatch({
      type: "updateCurrentMeetingTime",
      payload: props.meetingTimeStart,
    });
    dispatch({ type: "displayModalStartTrue" });
  };

  const StyledButton = styled.button`
    border-radius: 5%;
    background: "#1e90ff";
    width: 100%;
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

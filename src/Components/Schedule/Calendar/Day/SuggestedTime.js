import React from "react";
import styled from "styled-components";
export default function SuggestedTime(props) {
  const triggerModal = () => {};
  let meetingEnd = props.meetingTimeStart.toString()
  meetingEnd = meetingEnd.split(" ")
    meetingEnd[0] = Number(meetingEnd[0] + 1).toString();
    meetingEnd = meetingEnd.join(" ")


  const StyledButton = styled.button`
    border-radius: 5%;
    background: "#1e90ff";
    color: "#61dbfb";
    border-color: "#61dbfb";
    ::hover() {
      transform: scale(1.1);
    }
  `;
  return (
    <StyledButton onClick={triggerModal}>
      {`${props.meetingTimeStart}-${meetingEnd}`}
    </StyledButton>
  );
}

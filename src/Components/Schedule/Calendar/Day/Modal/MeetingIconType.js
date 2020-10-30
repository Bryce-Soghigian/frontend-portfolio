import React from "react";
import styled from "styled-components";
export default function MeetingIconType(props) {
  /**
   *  zoom endpoint in the api
   * the zoom endpoint needs to do a couple of things
   * 1. Update my current schedule with the current {state.currentTime.time:`Zoom meeting at ${state.currentTime.time}`
   * 2. Create a new zoom meeting
   * 3. email req.body.email a zoom link and the date and time of the meeting
   *
   */

  /**
   * phone endpoint
   * The phone endpoint is much simpler
   * it will just send my phone number to the recipient and the date and time via email
   * and update my current schedule withreq.body = {state.currentTime.time:`Phone meeting at ${state.currentTime.time}`
   */

  const lightblue = "#61dbfb";
  const MeetingIconDiv = styled.button`
    display: flex;
    width: 10vw;
    height: 7vh;
    /* flex-direction:column; */
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 5px;
    background: ${lightblue};
    margin: 2vw;
    :hover {
      border: white 2px solid;
      transform: scale(1.1);
      transform: rotate(18deg);
    }
    @media (min-width: 700px) {
      width: 7vw;
    }
  `;
  const P = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
  `;

  return (
    <div>
      <MeetingIconDiv onClick={props.onClickFunction}>
        <P>{props.meetingIcon}</P>
      </MeetingIconDiv>
    </div>
  );
}

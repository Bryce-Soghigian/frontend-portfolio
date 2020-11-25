import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../../contexts";
export default function MeetingIconType(props) {
  const { state } = useContext(GlobalContext);
  const lightblue = "#61dbfb";
  let scale = 1
  const white = "FFFFFF";
  if(props.meetingType ==="zoom"){
    scale = state.scaleZoom
  }
  if(props.meetingType === "phone"){
    scale = state.scalePhone
  }
  const MeetingIconDiv = styled.button`
    display: flex;
    width: 10vw;
    height: 7vh;
    /* flex-direction:column; */
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 5px;
    background: ${state.isSelected ? white : lightblue};
    margin: 2vw;
    transform:scale(${scale});
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

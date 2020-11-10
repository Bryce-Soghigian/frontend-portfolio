import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../../contexts";
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
    border-left: dodgerblue 5px solid;
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
  const convertToAmOrPm = (meetingTime)=> {
    let meetingTimeArray = meetingTime.split(":")
    if(Number(meetingTimeArray[0]) < 12){
      meetingTime += ' am'
    }else{
      if(Number(meetingTimeArray[0])=== 12){
        meetingTime += " pm"
      }else{
        let convertedFromMilitaryTime = Number(meetingTimeArray[0]-12)
        meetingTime = `${convertedFromMilitaryTime}:00 pm`
      }

    }
    console.log(meetingTime,"meetingTIme")
    return meetingTime
  }
  convertToAmOrPm(props.meetingTimeStart)
  return (
    <StyledButton onClick={triggerModal}>
      {convertToAmOrPm(props.meetingTimeStart)}
    </StyledButton>
  );
}

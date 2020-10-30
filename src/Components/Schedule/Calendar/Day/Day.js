import React, { useContext } from "react";
import styled from "styled-components";
import MapSuggestedTimes from "./MapSuggestedTimes";
import { GlobalContext } from "../../../../contexts";
export default function Day(props) {
  const { state } = useContext(GlobalContext);
  /**
   *
    This component will render all of the times i am available to meeet
   *
   */

  const DayContainer = styled.div`
    background:#61DBFB;
    z-index:1;
    border: black 2px solid;
    height: 40vh;
    width: 13vw;
    @media(max-width:500px){
      width:90vw;
      height:30vh;
      
    }
    overflow-y:scroll;

  `;
  const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
    text-shadow:1px 1px black;
  `;
  const Bottom = styled.div`
  overflow-y:scroll;
  `
  return (
    <DayContainer>
      <Top>
        <p>{props.day}</p>
        <p>{props.date}</p>
      </Top>
      <Bottom>
      {state.fetchedScheduleData ? (
        <MapSuggestedTimes day={props.day} date={props.date} currentDate={props.id} suggestedTimesArray={props.suggestedTimesArray} />
      ) : (
        <p>Loading suggested meeting times</p>
      )}
      </Bottom>

    </DayContainer>
  );
}

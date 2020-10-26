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
    background: "#045FB6";
    border: white 2px solid;
    height: 40vh;
    width: 13vw;
  `;
  const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
  `;
  return (
    <DayContainer>
      <Top>
        <p>{props.day}</p>
        <p>{props.date}</p>
      </Top>
      {state.fetchedScheduleData ? (
        <MapSuggestedTimes suggestedTimesArray={props.suggestedTimesArray} />
      ) : (
        <p>Loading suggested meeting times</p>
      )}
    </DayContainer>
  );
}

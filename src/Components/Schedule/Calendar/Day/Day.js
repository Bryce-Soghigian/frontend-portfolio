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
    background:#16B9E8;
    z-index: 1;
    border: black 2px solid;
    height: 40vh;
    width: 13vw;
    @media (max-width: 500px) {
      width: 95vw;
      height: 40vh;
      display: flex;
    }
    overflow-y: scroll;
  `;
  const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
    text-transform:bold;
    @media (max-width: 500px) {
      display: flex;
      justify-content: flex-start;
      flex-direction: column-reverse;
    }
  `;
  const Bottom = styled.div`
    overflow-y: scroll;
  `;
  return (
    <DayContainer>
      <Top>
        <p>{props.day}</p>
        <p>{props.date}</p>
      </Top>
      <Bottom>
        {state.fetchedScheduleData ? (
          <MapSuggestedTimes
            day={props.day}
            date={props.date}
            currentDate={props.id}
            suggestedTimesArray={props.suggestedTimesArray}
          />
        ) : (
          <p>Loading suggested meeting times</p>
        )}
      </Bottom>
    </DayContainer>
  );
}

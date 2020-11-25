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
    background: #012a36;

    z-index: 1;
    border: white 1px solid;
    height: 40vh;
    width: 13vw;
    @media (max-width: 500px) {
      width: 95vw;
      height: 40vh;
      display: flex;
    }
    overflow-x: scroll;
  `;
  const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
    text-transform: bold;
    border-bottom: solid white 1px;
    @media (max-width: 500px) {
      padding-left: 10px;
      border-bottom: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }
  `;
  const Bottom = styled.div`
    @media (max-width: 500px) {
      display: flex;
      justify-content: center;
    }
    overflow-x: scroll;
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

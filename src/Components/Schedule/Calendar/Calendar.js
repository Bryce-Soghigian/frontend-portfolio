import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts";
import Day from "./Day/Day";
import styled from "styled-components";
export default function Calendar() {
  const CalendarContainer = styled.div`
    margin: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  `;
  let i = 0;
  const { state } = useContext(GlobalContext);
  if (state.scheduleData.length === 0) {
    return (
      <div>
        <p>Loading ... </p>
      </div>
    );
  } else {
    return (
      <CalendarContainer>
        {state.scheduleData.map(x => {
          console.log(x, "X");
          i++;
          return (
            <Day
              suggestedTimesArray={x.freeTimesArray}
              date={x.date}
              day={x.day}
              id={x.currentDate}
              key={i + 100}
            />
          );
        })}
      </CalendarContainer>
    );
  }
}

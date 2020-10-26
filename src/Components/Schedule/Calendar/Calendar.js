import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts";
import Day from "./Day/Day";
import styled from "styled-components";
export default function Calendar() {
  const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  `;
  let i = 0;
  const { state, dispatch } = useContext(GlobalContext);
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
          i++;
          console.log(x);
          return (
            <Day
              suggestedTimesArray={x.freeTimesArray}
              date={x.date}
              day={x.day}
              key={i + 100}
            />
          );
        })}
      </CalendarContainer>
    );
  }
}

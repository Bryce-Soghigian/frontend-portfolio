import React from "react";
import SuggestedTime from "./SuggestedTime";
export default function MapSuggestedTimes(props) {
  let newDate = `${props.date}`;
  let i = 0;

  return (
    <div>
      {props.suggestedTimesArray.map(x => {
        i++;
        return (
          <SuggestedTime
            newDate={newDate}
            currentDate={props.currentDate}
            meetingTimeStart={x}
            key={i}
          />
        );
      })}
    </div>
  );
}

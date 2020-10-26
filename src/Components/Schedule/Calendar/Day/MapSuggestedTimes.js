import React from "react";
import SuggestedTime from "./SuggestedTime";
import styled from "styled-components";
export default function MapSuggestedTimes(props) {
  let i = 0;
  return (
    <div>
      {props.suggestedTimesArray.map(x => {
        i++;
        return <SuggestedTime meetingTimeStart={x} key={i} />;
      })}
    </div>
  );
}

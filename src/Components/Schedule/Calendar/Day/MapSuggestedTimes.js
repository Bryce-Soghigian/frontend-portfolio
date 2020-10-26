import React from 'react'
import SuggestedTime from './SuggestedTime'
export default function MapSuggestedTimes(props) {
    let i = 0;
    return (
        <div>
            {props.suggestedTimesArray.map(x =>{
                i++
                return <SuggestedTime meetingTimeStart={x} key={i} />
            } )}
        </div>
    )
}

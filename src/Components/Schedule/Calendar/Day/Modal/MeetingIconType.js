import React from 'react'

export default function MeetingIconType(props) {
    return (
        <div>
            <div>{props.meetingIcon}</div>
            <h5>{props.meetingType}</h5>
        </div>
    )
}

import React from 'react';
import styled from 'styled-components';
export default function SuggestedTime(props) {
    const triggerModal = () => {
        
    }
    const StyledButton = styled.button`
    border-radius:5%;
    background:"#1e90ff";
    color:"#61dbfb";
    `
    return (
        <StyledButton onClick={triggerModal}>
            {`${props.meetingTimeStart}-${props.meetingTimeEnd}`}
        </StyledButton>
    )
}

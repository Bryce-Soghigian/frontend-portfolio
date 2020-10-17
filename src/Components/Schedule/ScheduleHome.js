import React from 'react'
import styled from 'styled-components'
import ModalStartState from './Calendar/Day/Modal/ModalStartState'
export default function ScheduleHome() {
    
    const ScheduleContainer = styled.div`
  background: #011627;
  height: 93vh;
  width: 100vw;
    `
    return (
        <ScheduleContainer>
            <ModalStartState />
        </ScheduleContainer>
    )
}

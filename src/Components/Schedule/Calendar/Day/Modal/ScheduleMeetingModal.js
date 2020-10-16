import React from 'react'
import ModalEndState from './ModalEndState';
import ModalStartState from './ModalStartState';
export default function ScheduleMeetingModal(props) {
/**
 * This modal should appear in the center of the users screen above all other elements
 */
    if(props.modalState === "start"){
        return <ModalStartState />
    }else{
        return <ModalEndState />
    }


}

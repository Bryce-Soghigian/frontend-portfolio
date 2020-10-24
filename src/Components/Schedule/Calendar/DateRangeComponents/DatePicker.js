import React,{useContext} from 'react'
import {GlobalContext} from '../../../../contexts'
import {getTheCurrentDate} from '../../../../utils/today'
import styled from "styled-components";

export default function DatePicker() {
    const {state,dispatch} = useContext(GlobalContext);
    const errorMessageParagraph = styled.p`
color:#FF1A00;

`
    /**
     * <== state.startDate,state.endDate ==>
     */

    const handleReverse = () => {
    /**
     * Calculate new dates
     */
    let startDate = state.currentDateRange[0].startDate;
        if(1>0){
            dispatch({type:"newErrorMessage",payload:`Date you tried to select is not a vaild meeting time`})
        }
    }

    return (
        <div>
            <errorMessageParagraph>{state.errorMessage}</errorMessageParagraph>
            <div>
            <button onClick={handleReverse}>Back</button>

            </div>
        </div>
    )
}

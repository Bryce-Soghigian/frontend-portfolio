import React, { useContext } from "react";
import { GlobalContext } from "../../../../contexts";
import { getTheCurrentDate,getTheDateSixMonthsLater } from "../../../../utils/today";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function DatePicker() {
  const ErrorMessageParagraph = styled.p`
    color: #ff1a00;
  `;
  const Button = styled.button`
    background: none;
    border: none;
    color: white;
  `;
  /**
   * <== state.startDate,state.endDate ==>
   */
  const WhiteParagraph = styled.p`
    color: white;
  `;
  const PickerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const { state, dispatch } = useContext(GlobalContext);
  const formatDate = date => {
    date = date.slice(0, 2) + "-" + date.slice(2, 4) + "-" + date.slice(6);
    let day = new Date(date).toString().split(" ");

    let returnString = `${day[1]} ${day[2]}`;
    return returnString;
  };
  const handleReverse = () => {
    /**
     * Calculate new dates
     */
    let startDate = state.currentDateRange[0].startDate;
    console.log(startDate, getTheCurrentDate());
    if (getTheCurrentDate() > startDate) {
      dispatch({
        type: "newErrorMessage",
        payload: `Date you tried to select is not a vaild meeting time`,
      });
    } else {
        dispatch({
            type:"newErrorMessage",
            payload:``
        })
      dispatch({ type: "handleBackwards" });
    }
  };

  const handleForward = () => {
    let endDate = state.currentDateRange[1].endDate;
    if(getTheDateSixMonthsLater()> endDate){
        dispatch({
            type:"newErrorMessage",
            payload:`Thats far away! Lets choose a time closer!`
        })
    }else{
        dispatch({
            type:"newErrorMessage",
            payload:``
        })
        dispatch({type:"handleForward"})
    }

  };

  return (
    <div>
      <ErrorMessageParagraph>{state.errorMessage}</ErrorMessageParagraph>
      <PickerContainer>
        <Button onClick={handleReverse}>
          <IoIosArrowBack />
        </Button>
        <WhiteParagraph>
          {formatDate(state.currentDateRange[0].startDate)}-
          {formatDate(state.currentDateRange[1].endDate)}
        </WhiteParagraph>
      </PickerContainer>
      <Button onClick={handleForward}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
}

import React,{useEffect} from "react";
import styled from 'styled-components';
import MapSuggestedTimes from './MapSuggestedTimes'
export default function Day(props) {
  let isSorted = false;
  let suggestedTimesArray = []
  /**
   *
    This component will render all of the times i am available to meeet
   *
   */
  const sortSuggestedTimes = () => {
  for(let key in props.state){
    
    // if(props.state[key]==="free"){
    //   suggestedTimesArray.push(key)
    // }
  }
  isSorted = true;
  }
  useEffect(sortSuggestedTimes(),[])

  const DayContainer = styled.div`
  background:"#045FB6";
  
  `
  const Top = styled.div`
  display:flex;
  justify-content:space-evenly;
  color:white;
  
  `
  return(
    <DayContainer>
      <Top>
        <p>{props.day}</p>
        <p>{props.date}</p>
        </Top>
      {/* {isSorted ? <MapSuggestedTimes suggestedTimesArray={suggestedTimesArray} /> :<p>Loading suggested meeting times</p>} */}
    </DayContainer>
  )

}

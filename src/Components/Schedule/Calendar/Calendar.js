import React,{useContext} from "react";
import {GlobalContext} from '../../../contexts'
import Day from './Day/Day';
export default function Calendar() {
  
  const {state,dispatch} = useContext(GlobalContext)
  if(state.scheduleData.length === 0 ){
    return(<div>
      <p>Loading ... </p>
    </div>)
  }else{
    return (
      <div>
        {/* {state.scheduleData.map(x => {
          return <Day state={x} />
        })} */}
      </div>
    )
  }

}

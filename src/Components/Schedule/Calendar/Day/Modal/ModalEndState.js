import React,{useContext} from "react";
import {GlobalContext} from '../../../../../contexts'
import styled from 'styled-components'
export default function ModalEndState() {
    const {state} = useContext(GlobalContext)
    const Empty = styled.div`
    display: none;
  `;
    if(state.displayModalEnd){
        return <div>HELLO</div>;
    }else {
        return <Empty></Empty>
    }
  

}

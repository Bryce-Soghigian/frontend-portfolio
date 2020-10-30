import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../../contexts";
import styled from "styled-components";
import { SiZoom } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import MeetingIconType from "./MeetingIconType";
export default function ModalEndState() {
  const [input, setInput] = useState({});
  const { state, dispatch } = useContext(GlobalContext);
  const blue = "#045FB6";
  const lightblue = "#61dbfb";
  const Empty = styled.div`
    display: none;
  `;
  const ModalContainerEnd = styled.div`
    text-align: center;
    color: ${lightblue};
    font-family: "Changa One";
    z-index: 2;
    background: ${blue};
    position: fixed;
    top: 50%;
    left: 50%;
    height: 30vh;
    width: 30vw;
    transform: translate(-50%, -50%);
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    border-style: solid;
    border-color: black;
    text-shadow: 1px 1px black;
  `;
  const ButtonsContainer = styled.div`
    display: flex;

    justify-content: space-between;
  `;
  const Button = styled.button`
    font-size: 0.7rem;
    margin: 1em;
    width: 9vw;
    height: 3vh;
    border-radius: 5px;
    border-style: solid;
    border-color: black;
    background: #61dbfb;
    font-family: "Changa One";
    cursor: pointer;
    min-width: 50px;
    :hover {
      color: white;
      border-style: solid;
      border-color: white;
      transform: scale(1.5);
      transition: 0.5s;
    }
  `;
  const Input = styled.input`
    border: none;
    border-left: dodgerblue 4px solid;
    height: 4vh;
  `;
  const handleClick = meetingType => {
    dispatch({ type: "setMeetingType", payload: meetingType });
  };
  const handleCancel = () => {
    dispatch({ type: "displayModalEndFalse" });
  };

  if (state.displayModalEnd) {
    return (
      <ModalContainerEnd>
        <p>How would you like to meet?</p>
        <ButtonsContainer>
          <MeetingIconType
            meetingType={"Phone"}
            meetingIcon={<AiOutlinePhone />}
            onClickFunction={() => handleClick("phone")}
          />
          <MeetingIconType
            meetingType={"Zoom"}
            meetingIcon={<SiZoom />}
            onClickFunction={() => handleClick("zoom")}
          />
        </ButtonsContainer>
        <Input placeholder="youremail@gmail.com" />
        <ButtonsContainer>
          <Button>Submit</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonsContainer>
      </ModalContainerEnd>
    );
  } else {
    return <Empty></Empty>;
  }
}

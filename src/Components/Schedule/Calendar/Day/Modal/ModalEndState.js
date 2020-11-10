import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../../contexts";
import styled from "styled-components";
import { SiZoom } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import MeetingIconType from "./MeetingIconType";
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
export default function ModalEndState() {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState({
    error: false,
    value: "",
    errorMessage: "",
    isSelected: false,
  });
  const { state, dispatch } = useContext(GlobalContext);

  const handleClick = meetingType => {
    setEmail({ ...email, errorMessage: "" });
    dispatch({ type: "setMeetingType", payload: meetingType });
  };
  const handleCancel = () => {
    dispatch({ type: "displayModalEndFalse" });
  };
  const handleSubmit = () => {
    let value = email.value;
    const isValidEmail = re.test(value);
    if (state.currentMeetingType === "") {
      return setEmail({
        value,
        error: !false,
        errorMessage: "Please select a meeting type",
      });
    }
    if (isValidEmail) {
      if (state.currentMeetingType === "phone") {
        dispatch({ type: "requestPhoneMeeting", payload: email.value });
        dispatch({ type: "displayModalEndFalse" });
      }
      if (state.currentMeetingType === "zoom") {
        dispatch({ type: "requestZoomMeeting", payload: email.value });
        dispatch({ type: "displayModalEndFalse" });
      }

      dispatch({ type: "clearCurrentMeetingType" });
    } else {
      setEmail({
        value,
        error: !isValidEmail,
        errorMessage: "Please enter a valid email address",
      });
    }
  };
  const handleChange = e => {
    const value = e.target.value;

    setEmail({
      value,
      error: false,
    });
  };
  if (state.displayModalEnd) {
    return (
      <ModalContainerEnd>
        <p>
          {state.currentMeetingType
            ? `You have selected that you would like to meeet via ${state.currentMeetingType}`
            : "How would you like to meet?"}
        </p>
        <ButtonsContainer>
          <MeetingIconType
            meetingType={"Phone"}
            meetingIcon={<AiOutlinePhone />}
            onClickFunction={() => handleClick("phone")}
            isSelected={email.iconSelected}
          />
          <MeetingIconType
            meetingType={"Zoom"}
            meetingIcon={<SiZoom />}
            onClickFunction={() => handleClick("zoom")}
            isSelected={email.iconSelected}
          />
        </ButtonsContainer>
        {email.error ? <p>{email.errorMessage}</p> : ""}
        <Input
          name="email"
          placeholder="youremail@gmail.com"
          type="text"
          onChange={e => handleChange(e)}
          value={email.value}
        />
        <ButtonsContainer>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonsContainer>
      </ModalContainerEnd>
    );
  } else {
    return <Empty></Empty>;
  }
}

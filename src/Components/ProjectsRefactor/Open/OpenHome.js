import React from "react";
import styled from "styled-components";
import ReactPlanetary from "./ReactPlanetary";
import BryBryCli from "./BryBryCli";
export default function OpenHome() {
  const OpenContainer = styled.div``;
  return (
    <OpenContainer>
      <ReactPlanetary />
      <BryBryCli />
    </OpenContainer>
  );
}

import React from "react";

export default function BryBryCli() {
  const CliContainer = styled.div`
    background: #011627;
    height: 93vh;
    width: 100vw;
    margin: 0;
    border-bottom: 1px solid #4b6478;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 800px) {
      background: #011627;
      height: 93vh;
      width: 100vw;
      border-bottom: 1px solid #4b6478;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  `;
  const ProjectLeft = styled.div`
    margin: 10px;
  `;
  return (
    <CliContainer>
      <ProjectLeft></ProjectLeft>
    </CliContainer>
  );
}

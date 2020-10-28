import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiHtml5 } from "react-icons/di";
import { GiMoebiusTriangle } from "react-icons/gi";
import Skill from "./Skill";
import styled from "styled-components";
export default function SkillsHome() {
  /**
   * Objective of this component
   * Render out the skills components in divs surrounding the skills text
   */
  const Container = styled.div`
    display: grid;
    height: 93vh;
  background: #011526;
      /* grid-template-columns: auto auto auto; */
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: 1fr 1fr;
    @media (max-width: 600px) {
      display:flex;
      flex-direction:column;
      align-items:center;
    }
  `;

  const [skills] = useState([
    { icon: <FaAws />, color: "#FF9900", skillName: "Aws" },
    { icon: <FaReact />, color: "#0d73d9", skillName: "React" },
    { icon: <FaNodeJs />, color: "#addb67", skillName: "NodeJS" },
    { icon: <FaPython />, color: "#4b8bbe", skillName: "Python" },
    { isSkillsText: true },
    { icon: <DiJavascript1 />, color: "#f7df1e", skillName: "Javascript" },
    { icon: <DiPostgresql />, color: "#4b8bbe", skillName: "Postgres/SQL" },
    { icon: <DiHtml5 />, color: "#f16529", skillName: "Html&&Css" },
    { icon: <GiMoebiusTriangle />, color: "white", skillName: "ThreeJS" },
  ]);

  return (
    <Container>
      {skills.map(x => {
        return (
          <Skill
            isSkillsText={x.isSkillsText ? true : null}
            icon={x.icon}
            color={x.color}
            skillName={x.skillName}
          />
        );
      })}
    </Container>
  );
}

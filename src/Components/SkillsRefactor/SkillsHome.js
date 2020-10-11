import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaSass,FaAws } from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiHtml5 } from "react-icons/di";
import { GiMoebiusTriangle } from "react-icons/gi";
import Skill from './Skill';
import styled from 'styled-components'
export default function SkillsHome() {
  /**
   * Objective of this component
   * Render out the skills components in divs surrounding the skills text
   */
  const Container = styled.div`
  display:grid;
  height:93vh;
  /* grid-template-columns: auto auto auto; */
  grid-template-columns: repeat(3, .5fr);
grid-template-rows: 1fr 1fr;
@media(max-width:600px){
  grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr 1fr;
}


  `
  const [skills, setSkills] = useState([
    {icon:<FaAws /> , color:"#FF9900", skillName:"Aws"},
    // {blank:true},
    { icon: <FaReact />, color: "#0d73d9", skillName: "React" },
    // {blank:true},
    { icon: <FaNodeJs />, color: "#addb67", skillName: "NodeJS" },
    // {blank:true},
    { icon: <FaPython />, color: "#4b8bbe", skillName: "Python" },
    // {blank:true},
    { icon: <FaSass />, color: "#bf4080", skillName: "Sass" },
    // {blank:true},
    
    // {blank:true},
    { icon: <DiJavascript1 />, color: "#f7df1e", skillName: "Javascript" },
    // {blank:true},
    { icon: <DiPostgresql />, color: "#4b8bbe", skillName: "Postgres/SQL" },
    // {blank:true},
    { icon: <DiHtml5 />, color: "#f16529", skillName: "Html&&Css" },
    // {blank:true},
    { icon: <GiMoebiusTriangle />, color: "white", skillName: "ThreeJS" },
    // {blank:true},
    {isSkillsText:true},
    
  ]);

return <Container>{skills.map(x => {
    return <Skill isSkillsText = {x.isSkillsText?true:null}icon = {x.icon} color={x.color} skillName={x.skillName} />
})}</Container>;
}

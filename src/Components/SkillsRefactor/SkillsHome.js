import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaAws, FaThemeisle } from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiHtml5 } from "react-icons/di";
import { GiMoebiusTriangle } from "react-icons/gi";
import Skill from "./Skill";
import styled from "styled-components";
export default function SkillsHome() {
  /**
   * Objective of this component
   * Render out the skills components in divs surrounding the skills text
   */
   class NewSkillObject{
     constructor(icon, color, skillName, xPosition, yPosition){
      this.icon = icon
      this.color = color
      this.skillName = skillName 
      this.xPosition = xPosition
      this.yPosition = yPosition
     }
     
   }
   function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  const Container = styled.div`
    height: 93vh;
    background: #011526;
    /* grid-template-columns: auto auto auto; */
    column-count:2;
    @media (min-width: 800px) {
      display: grid;
    height: 93vh;
    background: #011526;
    /* grid-template-columns: auto auto auto; */
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: 1fr 1fr;
    }
  `;
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const getRandomDimenstions = (x1, y1) => {
    return  [Math.random() * x1/ x1, Math.random() * y1/ y1]
  }
  const defineSkills = () => {
    let obj1 = new NewSkillObject(<FaAws/>, "#FF9900", "Aws",0,0 )
    let obj2 = new NewSkillObject(<FaReact />, "#0d73d9", "React",0,0 )
    let obj3 = new NewSkillObject(<FaNodeJs />, "#4b8bbe", "NodeJS",0,0 )
    let obj4 = new NewSkillObject(<FaPython />, "#4b8bbe", "Python",0,0)
    let obj5 = new NewSkillObject( <DiJavascript1 />,  "#f7df1e",  "Javascript",0,0 )
    let obj6 = new NewSkillObject(<DiPostgresql />, "#4b8bbe","Postgres/SQL",0,0 )
    return [obj1, obj2, obj3, obj3, obj4, obj5, obj6]
  }
  const [skills, setSkills] = useState(defineSkills());
  useEffect(() => {
    function handleResize() {

      setWindowDimensions(getWindowDimensions());
    }
    
    window.addEventListener('resize', handleResize);
    let newSkills = [];

    for(let i = 0;i< skills.length;i++) {
      const {width, height} = windowDimensions;
      console.log("Width", width)
      console.log("height", height)
      const {x,y} = getRandomDimenstions(width, height);
      let skill = skills[i]
      skill.xPosition = x
      skill.yPosition = y
      newSkills.push(skill)
    }
    setSkills(newSkills)
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  console.log(skills)
  console.log(skills.map)
  return (
    <Container>
      {skills.map(x => {
        return (
          <Skill
            isSkillsText={x.isSkillsText ? true : null}
            xPosition={x.xPosition}
            yPosition={x.yPosition}
            icon={x.icon}
            color={x.color}
            skillName={x.skillName}
          />
        );
      })}
    </Container>
  );
}

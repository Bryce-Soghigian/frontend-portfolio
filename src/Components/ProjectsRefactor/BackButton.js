import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function BackButton() {
    const NavItem = styled(Link)`
  display: flex;
  margin: 5px;
  text-transform: bold;
  @media (min-width: 800px) {
    margin-right: 20px;
  }
  color: white;
  font-family: "Changa One";
  text-decoration: none;
  @media (min-width: 1700px) {
    font-size: 2rem;
  }
  :hover {
    transition: 0.5s;
    color: #61dbfb;
  }
`;
const BackButtonContainer = styled.div`

`
    return (
        <BackButtonContainer>
            <NavItem to="/Projects">Back To Projects</NavItem>
        </BackButtonContainer>
    )
}

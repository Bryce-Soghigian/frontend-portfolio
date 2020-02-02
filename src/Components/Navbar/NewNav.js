import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom"
import {GiHamburgerMenu} from 'react-icons/gi'
import HamburgerMenu from "react-hamburger-menu";
const Container = styled.div`
display: flex;
flex-direction:row-reverse;
width: 100vw;
height: 7vh;
background: #011627;
/* border-bottom: 5px #4B6478; */
`;
const NavItem = styled(Link)`
  display: flex;
  margin: 5px;
  text-transform:bold;
  @media (min-width: 800px) {
    margin-right: 20px;
  }

  color: #4b6478;
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
const Menuham = styled(GiHamburgerMenu)`
  color :#61dbfb;
  @media(min-width:1000px){
    font-size:1.5rem;
}
@media(min-width:1500px){

        font-size: 2.5rem;
    }
@media(min-width:1700px){
    font-size: 4.5rem;
}
`

export default function NewNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
  //Onclick have a dropdown with my nav routes
  return (
    <Container>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
          <Menuham/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavItem to="/Projects"><MenuItem onClick={handleClose}>Projects</MenuItem></NavItem>
        <NavItem to="/About"><MenuItem onClick={handleClose}>About</MenuItem></NavItem>
        <NavItem to="/Skills"> <MenuItem onClick={handleClose}>Skills</MenuItem></NavItem>
        <NavItem to="/Contact"><MenuItem onClick={handleClose}>Contact</MenuItem> </NavItem>
      </Menu>
    </Container>
  );
}

import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import SkillsHome from "./Components/SkillsRefactor/SkillsHome";
import About from "./Components/About Me/About";
import NewNav from "./Components/Navbar/NewNav";
import ProjectsHome from "./Components/ProjectsRefactor/ProjectsHome";
import OpenHome from "./Components/ProjectsRefactor/Open/OpenHome";
import DataHome from "./Components/ProjectsRefactor/Data/DataHome";
import UniverseHome from './Components/ProjectsRefactor/Universe/UniverseHome';
function App() {
  return (
    <div className="App">
      <NewNav />
      <Route exact path="/" component={Home} />
      <Route path="/Open" component={OpenHome} />
      <Route  path="/Data" component={DataHome} />
      <Route path ="universe" component={UniverseHome} />
      <Route  path="/About" component={About} />
      <Route exact path="/Projects" component={ProjectsHome} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Skills" component={SkillsHome} />
    </div>
  );
}
export default App;

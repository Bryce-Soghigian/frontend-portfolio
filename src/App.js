import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ProjectFive from "./Components/Projects/ProjectFive";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import ProjectOne from "./Components/Projects/ProjectOne";
import ProjectTwo from "./Components/Projects/ProjectTwo";
import ProjectThree from "./Components/Projects/ProjectThree";
import ProjectFour from "./Components/Projects/ProjectFour";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About Me/About";
import NewNav from "./Components/Navbar/NewNav";
import ProjectsHome from "./Components/ProjectsRefactor/ProjectsHome";
import OpenHome from "./Components/ProjectsRefactor/Open/OpenHome";
import DataHome from "./Components/ProjectsRefactor/Data/DataHome";
function App() {
  return (
    <div className="App">
      <NewNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/Open" component={OpenHome} />
      <Route exact path="/Data" component={DataHome} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Projects" component={ProjectsHome} />
      <Route exact path="/Project1" component={ProjectOne} />
      <Route exact path="/Project2" component={ProjectTwo} />
      <Route exact path="/Project3" component={ProjectThree} />
      <Route exact path="/Project4" component={ProjectFour} />
      <Route exact path="/Project5" component={ProjectFive} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Skills" component={Skills} />
    </div>
  );
}
export default App;

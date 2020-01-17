import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contacts/Contact';
import ProjectOne from './Components/Projects/ProjectOne';
import ProjectTwo from './Components/Projects/ProjectTwo'
import ProjectThree from './Components/Projects/ProjectThree';

function App() {
  return (
    <div className="App">

        <Navbar/>

            <Route exact path = "/"  component={Home}/>
            <Route exact path = "/Projects" component ={Projects}/> 
            <Route exact path="/Project1" component={ProjectOne}/>
            <Route exact path="/Project2" component={ProjectTwo}/>
            <Route exact path = "/Project3" component={ProjectThree}/>
            <Route exact path ="/Project4"/>
            <Route exact path = "/Contact" component={Contact}/>

    </div>
  );
}

export default App;

import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contacts/Contact';

function App() {
  return (
    <div className="App">

        <Navbar/>

            <Route exact path = "/"  component={Home}/>
            <Route exact path = "/Projects" component ={Projects}/> 
            <Route exact path = "/Contact" component={Contact}/>
    </div>
  );
}

export default App;

import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">

        <Navbar/>

            <Route exact path = "/"  component={Home}/>
            <Route exact path = "/Projects"/> 
            <Route exact path = "/Contact"/>
    </div>
  );
}

export default App;

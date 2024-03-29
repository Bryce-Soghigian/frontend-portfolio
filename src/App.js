import React, { useReducer} from "react";
import { Route } from "react-router-dom";

import { GlobalContext } from "./contexts";
import { reducer, initialState } from "./reducer";

import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import NewNav from "./Components/Navbar/NewNav";
import ProjectsHome from "./Components/ProjectsRefactor/ProjectsHome";
import OpenHome from "./Components/ProjectsRefactor/Open/OpenHome";
import DataHome from "./Components/ProjectsRefactor/Data/DataHome";
import UniverseHome from "./Components/ProjectsRefactor/Universe/UniverseHome";
import WebAppHome from "./Components/ProjectsRefactor/WebApp/WebAppHome";
import BackendHome from "./Components/ProjectsRefactor/Apis/BackendHome";
import BlogHome from './Components/Blog/BlogHome'
import "./App.css";
import Blog from "./Components/Blog/Blog";

function App() {
  //Providing Global State
  const [state, dispatch] = useReducer(reducer, initialState);
  //Fetching schedule data

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className="App">
        <NewNav />
        <Route exact path="/" component={Home} />
        <Route path="/Open" component={OpenHome} />
        <Route path="/Data" component={DataHome} />
        <Route path="/apis" component={BackendHome} />
        <Route path="/apps" component={WebAppHome} />
        <Route path="/universe" component={UniverseHome} />
        <Route exact path="/Projects" component={ProjectsHome} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/blog" component={BlogHome} />
        <Route exact path="/blog/:blog_id" component={Blog} />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;

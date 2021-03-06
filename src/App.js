import React, { useReducer, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import SkillsHome from "./Components/SkillsRefactor/SkillsHome";
import NewNav from "./Components/Navbar/NewNav";
import ProjectsHome from "./Components/ProjectsRefactor/ProjectsHome";
import OpenHome from "./Components/ProjectsRefactor/Open/OpenHome";
import DataHome from "./Components/ProjectsRefactor/Data/DataHome";
import UniverseHome from "./Components/ProjectsRefactor/Universe/UniverseHome";
import ScheduleHome from "./Components/Schedule/ScheduleHome";
import { GlobalContext } from "./contexts";
import { reducer, initialState } from "./reducer";
import axios from "axios";
import WebAppHome from "./Components/ProjectsRefactor/WebApp/WebAppHome";
import BackendHome from "./Components/ProjectsRefactor/Apis/BackendHome";
function App() {
  //Providing Global State
  const [state, dispatch] = useReducer(reducer, initialState);
  //Fetching schedule data
  console.log(state);

  useEffect(() => {
    axios
      .get(
        `https://scheduling-api-bryce-portfolio.herokuapp.com/api/v1/meeting/range/${state.currentDateRange[0].startDate}/${state.currentDateRange[1].endDate}`,
      )
      .then(data => {
        console.log(state.currentDateRange[0].startDate,"bigblackcok",state.currentDateRange[1].endDate)
        dispatch({ type: "fetchScheduleData", payload: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, [state.currentDateRange]);
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
        <Route path="/Schedule" component={ScheduleHome} />
        <Route exact path="/Projects" component={ProjectsHome} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Skills" component={SkillsHome} />
      </div>
    </GlobalContext.Provider>
  );
}
export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";

function App() {
  return (
    <Router>
    <div className="App">
       <Header/>
       <Switch>
          <Route path="/task2">
             <TaskTwo/>
          </Route>
          <Route path="/">
             <TaskOne/>
          </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;

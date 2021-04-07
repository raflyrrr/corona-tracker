import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Hotline from './pages/Hotline'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/hotline" component={Hotline}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Hotline from './pages/Hotline'
import Hoax from './pages/Hoax'
import Info from './pages/Info'
import InfoDetail from './pages/InfoDetail'
import AdminHome from './pages/AdminHome'
import AdminDataInfo from './pages/AdminDataInfo'
import AdminHomeEditInfo from './pages/AdminHomeEditInfo';
import AdminHomeAddInfo from './pages/AdminHomeAddInfo'
import AdminLogin from './pages/AdminLogin'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/hotline" component={Hotline}></Route>
          <Route exact path ="/hoax" component={Hoax}></Route>
          <Route exact path ="/info" component={Info}></Route>
          <Route exact path ="/info/:id" component={InfoDetail}></Route>
          <Route exact path ="/adminhome" component={AdminHome}></Route>
          <Route exact path ="/admin" component={AdminLogin}></Route>
          <Route exact path ="/admindatainfo" component={AdminDataInfo}></Route>
          <Route path ="/admindatainfo/edit/:id" component={AdminHomeEditInfo}></Route>
          <Route exact path ="/admindatainfo/adminaddinfo" component={AdminHomeAddInfo}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

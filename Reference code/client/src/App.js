import './App.css';
import react, { useState } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import { getToken } from './Utils/Common';

function App() {

  const [authLoading, setAuthLoading] = useState(true);

  // if(authLoading && getToken()){
  //   return <div class="content">Checking Authentication...</div>
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/login">Login <small>Access w/o token only</small></NavLink>
          <NavLink activeClassName="active" to="/dashboard">Dashboard<small>Access w token only</small></NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path = "/" component= {Home}></Route>
            <PublicRoute path = "/login" component= {Login}/>
            <PrivateRoute path = "/dashboard" component= {Dashboard}/>
          </Switch>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

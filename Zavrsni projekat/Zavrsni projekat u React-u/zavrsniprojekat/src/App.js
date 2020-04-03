import React, { Component } from 'react';
import Dashboard from './components/layout/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Pokemon from './components/pokemon/Pokemon';
import PrivateRoute from './components/PrivateRoutes';
import PublicRoute from './public/PublicRoutes';
import { Register } from './public/component/Register';
import { Login } from './public/component/Login';
import About from './components/layout/About';
import Pokepedia from './components/layout/Pokepedia';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <PublicRoute component={Register} exect path="/register" />
            <PublicRoute component={Login} exect path="/login" />
            <PrivateRoute component={About} exact path="/about" />
            <PrivateRoute component={Pokepedia} exact path="/pokepedia" />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <PrivateRoute component={Dashboard} exact path="/dashboard" />
            <Redirect from="/" to="login"  />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
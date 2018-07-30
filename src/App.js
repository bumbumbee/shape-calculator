import React, { Component } from 'react';
import Header from './components/Header'
import Calculator from './components/Calculator'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/calculator" component={Calculator}/>
                    <Route exaxt path="/dashboard" component={Dashboard}/>
                </Switch>

            </div>
        </BrowserRouter>

    );
  }
}
export default App;
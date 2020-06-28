import React from 'react';
import './fonts/fonts.css';
import './App.css';

import Login from './components/Login/Login';
import Board from './components/Board/Board';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Board/pages/Dashboard/Dashboard';


class App extends React.Component {
  state = {
    itsTrue: true
  }
  render() {

    let boardPage = (
      <Board appState={this.props.appState} addRow={this.props.addRow} />
    )
    let loginPage = (
      <Login />
    )

    if (this.state.itsTrue) {
      
      loginPage = null;

      return (
        <BrowserRouter>
          <div className="App">
            <div>
              {boardPage}
            </div>
            <Route path='/board' component={Board} />
            <Redirect to="/dashboard" component={Dashboard} />

          </div>
        </BrowserRouter>
      )
    } else {

      return (
        <BrowserRouter>
          <div className="App">
            <div>
              {loginPage}
            </div>
            <Route path='/login' component={Login} />
          </div>
        </BrowserRouter>
      )
    };
  }
}

export default App;

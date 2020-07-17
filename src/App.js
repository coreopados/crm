import React from 'react';
import './fonts/fonts.css';
import './App.css';
import './components/Board/board.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Board/pages/Dashboard/Dashboard';
import Users from './components/Board/pages/Users/Users';
import Sales from './components/Board/pages/Sales/Sales';
import Clients from './components/Board/pages/Clients/Clients';
import Settings from './components/Board/pages/Settings/Settings';
import Menu from './components/Board/Menu';
import Head from './components/Board/Head';


class App extends React.Component {
  state = {
    itsTrue: true
  }
  render() {

    let loginPage = (
      <Login />
    )

    if (this.state.itsTrue) {

      loginPage = null;

      return (
        <BrowserRouter>

          <div className="App">
            <div className="start_page">
              <Menu />
              <div className="content-part">
                <Head />
                <div className="page-board">
                  <Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/sales' component={Sales} />
                    <Route exact path='/clients' component={Clients} />
                    <Route exact path='/users' component={Users} />
                    <Route exact path='/settings' component={Settings} />
                  </Switch>
                </div>

              </div>

            </div>

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
            <Switch>
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    };
  }
}

export default App;

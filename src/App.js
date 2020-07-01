import React from 'react';
import './fonts/fonts.css';
import './App.css';
import './components/Board/board.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Board/pages/Dashboard/Dashboard';
import Users from './components/Board/pages/Users/Users';
import Sales from './components/Board/pages/Sales/Sales';
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
                    {/* <Route path={'/' || '/dashboard'} render={() => <Dashboard appState={this.props.appState} />} />
                        <Route path='/sales' render={() => <Sales appState={this.props.appState} addRow={this.props.addRow} />} /> */}

                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/sales' component={Sales} />
                    <Route path='/users' component={Users} />
                    <Route path='/settings' component={Settings} />
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
            <Route path='/login' component={Login} />
          </div>
        </BrowserRouter>
      )
    };
  }
}

export default App;

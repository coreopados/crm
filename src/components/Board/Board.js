import React from 'react';

import '../../App.css';
import './board.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Sales from './pages/Sales/Sales';
// import FormNewOrder from './pages/Sales/FormNewOrder';
import Settings from './pages/Settings/Settings';
import Menu from './Menu';
import Head from './Head';
// import Login from '../Login/Login';




class Board extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div className="start_page">
          <Menu />
          <div className="content-part">
            <Head />

            <div className="page-board">
              {/* <Route path='/login' component={Login} /> */}
              <Route path='/dashboard' render={() => <Dashboard appState={this.props.appState} />} />
              <Route path='/sales' render={() => <Sales appState={this.props.appState} addRow={this.props.addRow} />} />
              <Route path='/users' component={Users} />
              <Route path='/settings' component={Settings} />
            </div>

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default Board;


import App from './App';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import state from './state/dataTest';
import { rerenderEntireTree } from './render'


rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

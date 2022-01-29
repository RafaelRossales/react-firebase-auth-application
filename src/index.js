import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/Global.css'

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

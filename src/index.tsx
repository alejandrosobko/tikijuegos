import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/index.css';
import './assets/css/index_mobile.css';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

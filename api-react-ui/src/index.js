import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from "./components/table/Table.js";
// import App from './App';
// import Demo from './demo';
// import IntegrationDownshift from './components/demo-ui-material/Autocomplete.js';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Demo />, document.getElementById('root'));
  // ReactDOM.render(<IntegrationDownshift/>,document.getElementById('root'));
  ReactDOM.render(<Table/>,document.getElementById('root'));

registerServiceWorker();

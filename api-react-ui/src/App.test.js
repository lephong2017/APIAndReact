import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Demo from './demo';
import IntegrationDownshift from './components/demo-ui-material/Autocomplete.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDom.render(<Demo/>,div);
  ReactDom.render(<IntegrationDownshift/>,div);
  ReactDOM.unmountComponentAtNode(div);
});

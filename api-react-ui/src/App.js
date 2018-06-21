import React, { Component } from 'react';
import Fetch from "react-json-fetch"


class App extends Component {
  render() {
    return (
      <Fetch url="http://nguyenphucthinhwebapi.azurewebsites.net/api/product/findall">
        {({ status, json }) => {
          if (status && status.ok) { return <div>Hurray!</div> }
          if (status && !status.ok) { return <div>{json}</div> }
          return <div>Loading...</div>
        }}
      </Fetch>
    );
  }
}

export default App;

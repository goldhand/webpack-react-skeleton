import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello';
import World from './world';


class App extends React.Component {

  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
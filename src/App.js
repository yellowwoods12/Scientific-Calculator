import React, { Component } from 'react';
import Calcualtor from './components/Calculator'
 
class App extends Component {
  render() {
    return (
      <div className="container">
       <div  className="unselectable" id="calculator">
        <Calcualtor />
         </div>
      </div>
    );
  }
}

export default App;

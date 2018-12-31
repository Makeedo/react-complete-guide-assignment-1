import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput userName='NicolausKlinger'/>
        <UserOutput userName='JazminSol'/>
        <UserOutput userName='AlinaKlinger'/>
      </div>
    );
  }
}

export default App;

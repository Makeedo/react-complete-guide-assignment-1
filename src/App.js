import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: "RandomUser"
  };

  userNameChangeHandler = (event) => {
    this.setState({
        userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput value={this.state.userName} changeHandler={this.userNameChangeHandler}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Day1 from "./Components/Day1/Day1";
import ChatBox from "./Components/ChatBox/ChatBox";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <ChatBox/>
      </div>
    );
  }
}

export default App;

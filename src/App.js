import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;

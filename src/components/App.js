import React, { Component } from 'react'
import logo from '../logo.svg'
import Header from './Header'
import '../styles/App.css'

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'React Sample Application'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header title={this.state.title}/>
        </div>
      </div>
    );
  }
}
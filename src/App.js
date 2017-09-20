import React, { Component } from 'react';
import Board from './components/Board';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="board">
        <header className="board-header">
          <img src={logo} className="board-logo" alt="logo" />
          <h2>Dennis Digital Kanban Board</h2>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;

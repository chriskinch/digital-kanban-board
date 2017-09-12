import React, { Component } from 'react';
import boardLayout from './config/boardlayout.json';
import Board from './components/Board';
import logo from './logo.svg';
import styles from './styles/App.css';

class App extends Component {
  render() {
    console.log(this.props);
    console.log(boardLayout);
    return (
      <div className={styles.board}>
        <header className={styles.board_header}>
          <img src={logo} className={styles.board_logo} alt="logo" />
          <h2>Dennis Digital Kanban Board</h2>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;

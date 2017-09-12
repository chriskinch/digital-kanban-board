import React, { Component } from 'react';
import Ticket from './Ticket';
import styles from '../styles/ticket.css';

class Board extends Component {
  render() {
    return (
      <div className={styles.main_board}>
        <Ticket title='Spec this board' />
        <Ticket title='Make it good nice' />
        <Ticket title='Get it all wrong' />
        <Ticket title='Refactor' />
      </div>
    );
  }
}

export default Board;

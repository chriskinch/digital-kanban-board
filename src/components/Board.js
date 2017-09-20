import React, { Component } from 'react';
import boardLayout from '../config/boardlayout.json';
import Lane from './Lane';
import Ticket from './Ticket';

class Board extends Component {
  render() {
    return (
      <div className="main-board">

        {boardLayout.lanes.map((item, index) => (
           <Lane item={item} groups={boardLayout.groups} key={index} />
        ))}


        <Ticket title='Spec this board' />
        <Ticket title='Make it good nice' />
        <Ticket title='Get it all wrong' />
        <Ticket title='Refactor' />
      </div>
    );
  }
}

export default Board;

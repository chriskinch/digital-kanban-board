import React from 'react'
import '../styles/ticket.css';

export default class Ticket extends React.Component {
  render() {
    return (
      <div className="ticket">I am a ticket called { this.props.title }</div>
    )
  }
}

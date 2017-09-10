import React from 'react'
import '../styles/ticket.css';

const Ticket = ({ id, title, description, onClick }) => {
	return <div>I am a ticket called { title }</div>
}

export default Ticket
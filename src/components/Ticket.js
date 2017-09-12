import React from 'react'
import styles from '../styles/ticket.css';

const Ticket = ({ id, title, description, onClick }) => {
	return <div className={styles.ticket}>I am a ticket called { title }</div>
}

export default Ticket
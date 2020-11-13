import React from 'react'


import './Input.css'

const Input = ({message, setMessage, sendMessage}) => (
    <form className>
        <input
        className="input"
        type="text"
        placeholder="Сообщение..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Отправить</button>
    </form>
)

export default Input
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';
import MessagesValue from './MessagesValue/MessagesValue';
import React from 'react';

//Сводка имен и содержимого сообщений в одно целое
const Messages = (props) => {

	let smsElements = props.state.smsData.map((sms) => <MessagesValue message={sms.message} />);

	// d - dialogs (сокращение)
	let messagesElements = props.state.messagesUser.map((d) => <MessagesItem name={d.name} id={d.id} />);


	let newTextMessage = React.createRef();
	let addMessage = () => {
		let newMessage = newTextMessage.current.value;
	}

	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.contacts}>
					{messagesElements}
				</div>
				<div className={s.sms}>
					{smsElements}
					<div className={s.flex}>
						<textarea className={s.textarea} ref={newTextMessage}></textarea>
						<button className={s.button} onClick={addMessage}>Отправить</button>
					</div>
				</div>
			</div>

		</div>

	);
}

export default Messages;
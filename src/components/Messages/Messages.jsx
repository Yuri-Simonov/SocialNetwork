import s from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';
import MessagesValue from './MessagesValue/MessagesValue';
import React from 'react';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../Redux/messagePage-reducer';

//Сводка имен и содержимого сообщений в одно целое
const Messages = (props) => {

	let smsElements = props.state.smsData.map((sms) => <MessagesValue message={sms.message} />);

	// d - dialogs (сокращение)
	let messagesElements = props.state.messagesUser.map((d) => <MessagesItem name={d.name} id={d.id} />);


	let newPostElement = React.createRef();

	let addMessage = () => {
		props.dispatch(AddMessageActionCreator());
	}
	//
	let onMessageChange = (e) => {
		let newMessage = e.target.value;
		let action = onMessageChangeActionCreator(newMessage);
		props.dispatch(action);
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
						<textarea onChange={onMessageChange} className={s.textarea} value={props.state.newMessageText} placeholder="Напишите сообщение..."></textarea>
						<button className={s.button} onClick={addMessage}>Отправить</button>
					</div>
				</div>
			</div>

		</div>

	);
}

export default Messages;
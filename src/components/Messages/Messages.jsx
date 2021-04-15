import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';
import MessagesValue from './MessagesValue/MessagesValue';

let smsData = [
	{ id: 1, message: "Здарова", },
	{ id: 2, message: "Как ты?", },
	{ id: 3, message: "Ау", },
	{ id: 4, message: "Ты тут?", },
]

let smsElements = smsData.map((sms) => <MessagesValue message={sms.message} />)

let messagesUser = [
	{ id: 1, name: "Маша", },
	{ id: 2, name: "Дима", },
	{ id: 3, name: "Катя", },
	{ id: 4, name: "Виктор", },
	{ id: 5, name: "Максим", },
	{ id: 6, name: "Григорий", },
]
// d - dialogs (сокращение)
let messagesElements = messagesUser.map((d) => <MessagesItem name={d.name} id={d.id} />)


//Сводка имен и содержимого сообщений в одно целое
const Messages = (props) => {

	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.contacts}>
					{messagesElements}
				</div>
				<div className={s.sms}>
					{smsElements}
				</div>
			</div>

		</div>

	);
}

export default Messages;
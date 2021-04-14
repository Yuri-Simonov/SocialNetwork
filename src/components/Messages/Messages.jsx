import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const MessagesItem = (props) => {
	return (
		<div>
			<NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
		</div>
	);
}

const MessagesValue = (props) => {
	return (
		<div>
			{props.message}
		</div>
	);
}


const Messages = (props) => {
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.contacts}>

					<MessagesItem name="Маша" id="1" />
					<MessagesItem name="Дима" id="2" />
					<MessagesItem name="Катя" id="3" />
					<MessagesItem name="Виктор" id="4" />
					<MessagesItem name="Максим" id="5" />
					<MessagesItem name="Григорий" id="6" />

				</div>
				<div className={s.sms}>

					<MessagesValue message="Здарова" />
					<MessagesValue message="Как ты?" />
					<MessagesValue message="Ау" />
					<MessagesValue message="Ты тут?" />

				</div>
			</div>

		</div>

	);
}

export default Messages;
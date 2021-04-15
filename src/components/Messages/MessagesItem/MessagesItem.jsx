import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css';

//Имена собеседников в сообщениях
const MessagesItem = (props) => {
	return (
		<div>
			<NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
		</div>
	);
}

export default MessagesItem;
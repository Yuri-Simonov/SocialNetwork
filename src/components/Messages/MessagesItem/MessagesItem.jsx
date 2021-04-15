import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css';

//Имена собеседников в сообщениях
const MessagesItem = (props) => {
	return (
		<div>
			<img src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
			<NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>

		</div>

	);
}

export default MessagesItem;
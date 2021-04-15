
import s from './../Messages.module.css';

//Содержимое сообщений
const MessagesValue = (props) => {



	return (
		<div className={s.evenMessage}>
			{props.message}
		</div>

	);
}

export default MessagesValue;
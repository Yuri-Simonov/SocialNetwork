import s from './../Messages.module.css';

//Содержимое сообщений
const MessagesValue = (props) => {
	return (
		<div>
			{props.message}
		</div>
	);
}

export default MessagesValue;
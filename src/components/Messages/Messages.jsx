import s from './Messages.module.css';


const Messages = (props) => {
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.contacts}>
					<div>
						Маша
					</div>
					<div>
						Дима
					</div>
					<div>
						Катя
					</div>
					<div>
						Виктор
					</div>
					<div>
						Максим
					</div>
					<div>
						Григорий
					</div>
				</div>
				<div className={s.sms}>
					<div>
						Здарова
					</div>
					<div>
						Как ты?
					</div>
					<div>
						Ау
					</div>
					<div>
						Ты тут?
					</div>
				</div>
			</div>

		</div>

	);
}

export default Messages;
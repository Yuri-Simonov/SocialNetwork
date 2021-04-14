import Posts from './Posts/Post';
import MyPageTopSection from './MyPageTopSection/MyPageTopSection';
import s from './MyPage.module.css';


const MyPage = () => {
	return (
		<div className={s.content}>
			<MyPageTopSection />
			<div className={s.title}>Что у вас новенького?</div>
			<div>
				<textarea className={s.textarea}></textarea>
			</div>
			<Posts message="Сегодня уже третий день, как я пытаюсь их понять... убейте меня, чтобы я не мучался..." />
			<Posts message="Долбанные прототипы... Кто может объяснить их мне?" />
			<Posts message="Сегодня начал изучать основы JavaScript" />
			<Posts message="Что-то тут совсем тихо" />
			<Posts message="Всем привет, я тут новенький!" />
		</div>
	);
}

export default MyPage;
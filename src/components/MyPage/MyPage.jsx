import Posts from './Posts/Post';
import MyPageTopSection from './MyPageTopSection/MyPageTopSection';
import s from './MyPage.module.css';


const MyPage = () => {

	let MyPageData = [
		{ id: 1, message: "Сегодня уже третий день, как я пытаюсь их понять... убейте меня, чтобы я не мучался...", },
		{ id: 2, message: "Долбанные прототипы... Кто может объяснить их мне?", },
		{ id: 3, message: "Сегодня начал изучать основы JavaScript", },
		{ id: 4, message: "Что-то тут совсем тихо", },
		{ id: 5, message: "Всем привет, я тут новенький!", },

	]

	let postsElements = MyPageData.map((m) => <Posts message={m.message} />)

	return (
		<div className={s.content}>
			<MyPageTopSection />
			<div className={s.title}>Что у вас новенького?</div>
			<div>
				<textarea className={s.textarea}></textarea>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPage;
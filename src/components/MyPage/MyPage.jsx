import Posts from '../Posts/Post';
import s from './MyPage.module.css';

const MyPage = () => {
	return (
		<div className={s.content}>
			<img src="https://lookw.ru/9/957/1566942119-93.jpg"></img>
			<Posts message="Здарова, как дела?" />
			<Posts message="Чего молчишь, зараза?" />
			<Posts message="Верни долг!!!" />
			<Posts message="Ты тут?" />
			<Posts message="Ау" />
		</div>
	);
}

export default MyPage;
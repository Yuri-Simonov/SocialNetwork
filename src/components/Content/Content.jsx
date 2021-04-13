import Posts from '../Posts/Post';
import s from './Content.module.css';

const Content = () => {
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

export default Content;
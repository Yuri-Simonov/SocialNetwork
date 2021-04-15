import Posts from './Posts/Post';
import MyPageTopSection from './MyPageTopSection/MyPageTopSection';
import s from './MyPage.module.css';

const MyPage = (props) => {


	let postsElements = props.state.MyPageData.map(m => <Posts message={m.message} />);
	/* let friendsNames = props.stateFriends.friendsNames.map(n => <MyPageTopSection name={n.name} />); */

	return (



		<div className={s.content}>
			<MyPageTopSection />
			{/* 	{friendsNames} */}
			<div className={s.title}>Что у вас новенького?</div>
			<div>
				<textarea className={s.textarea}></textarea>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPage;
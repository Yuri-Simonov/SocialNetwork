import Posts from './Posts/Post';
import MyPageTopSection from './MyPageTopSection/MyPageTopSection';
import s from './MyPage.module.css';
import React from 'react';

const MyPage = (props) => {


	let postsElements = props.state.MyPageData.map(m => <Posts message={m.message} />);
	/* let friendsNames = props.stateFriends.friendsNames.map(n => <MyPageTopSection name={n.name} />); */



	let newPostElement = React.createRef();

	let addPost = () => {

		let newText = newPostElement.current.value;
		props.addPost(newText);
		newPostElement.current.value = '';
	}

	return (
		<div className={s.content}>
			<MyPageTopSection name={props.friends} />
			{/* 	{friendsNames} */}
			<div className={s.title}>Что у вас новенького?</div>
			<div className={s.flex}>
				<textarea className={s.textarea} ref={newPostElement}></textarea>
				<button className={s.button} onClick={addPost}>Отправить</button>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPage;
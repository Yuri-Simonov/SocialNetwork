import Posts from './Posts/Post';
import MyPageTopSection from './MyPageTopSection/MyPageTopSection';
import s from './MyPage.module.css';
import React from 'react';

const MyPage = (props) => {


	let postsElements = props.state.MyPageData.map(m => <Posts message={m.message} />);
	/* let friendsNames = props.stateFriends.friendsNames.map(n => <MyPageTopSection name={n.name} />); */



	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let newText = newPostElement.current.value;
		props.updateNewPostText(newText);

	}

	return (
		<div className={s.content}>
			<MyPageTopSection name={props.friends} />
			{/* 	{friendsNames} */}
			<div className={s.title}>Что у вас новенького?</div>
			<div className={s.flex}>
				<textarea onChange={onPostChange} placeholder="Поделитесь своими мыслями с другими людьми" className={s.textarea} ref={newPostElement} value={props.newPostText} />
				<button button className={s.button} onClick={addPost}>Отправить</button>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPage;
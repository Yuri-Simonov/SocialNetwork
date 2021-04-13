import s from './Post.module.css';

const Posts = (props) => {
	return (
		<div className={s.posts}>
			<div className={s.post}>
				<img src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
				<span>{props.message}</span>
			</div>

		</div>
	);
}

export default Posts;
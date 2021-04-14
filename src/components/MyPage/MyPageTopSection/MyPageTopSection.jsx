import s from './MyPageTopSection.module.css';

const MyPageTopSection = () => {
	return (
		<div className={s.grid}>
			<div className={s.avatar}>
				<img src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
			</div>
			<div>
				Description
			</div>
		</div>
	);
}

export default MyPageTopSection;
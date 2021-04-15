import s from './MyPageTopSection.module.css';
import state from "../../Redux/state"

const MyPageTopSection = (props) => {

	return (
		<div className={s.grid}>
			<div className={s.avatar}>
				<img src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
			</div>
			<div className={s.friends}>
				<div>
					<h2 className={s.friendsTitle}>Друзья</h2>
					<div className={s.friendsFlex}>
						<div>
							<img className={s.friends1} src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
							<p className={s.nameFriends}>{props.name[0]}</p>
						</div>
						<div>
							<img className={s.friends1} src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
							<p className={s.nameFriends}>{props.name[1]}</p>
						</div>
						<div>
							<img className={s.friends1} src="http://img1.joyreactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-4558385.jpeg"></img>
							<p className={s.nameFriends}>{props.name[2]}</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.description}>
				Description
			</div>
		</div>
	);
}

export default MyPageTopSection;
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.grid}>
				<div className={s.logo}>
					<img className={s.img} src="https://www.freepngimg.com/thumb/phoenix/8-2-phoenix-png.png"></img>
					<span>SocialNetwork</span>
				</div>
				<div>Плеер музыки</div>
				<div>Поисковик</div>
				<div>Аккаунт</div>
			</div>
		</header>
	);
}

export default Header;
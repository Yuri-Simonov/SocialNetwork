import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<NavLink to="/myPage" activeClassName={s.active} >
					<li>Моя страница</li>
				</NavLink>
				<NavLink to="/news" activeClassName={s.active}>
					<li>Новости</li>
				</NavLink>
				<NavLink to="/messages" activeClassName={s.active}>
					<li>Сообщения</li>
				</NavLink>
				<NavLink to="/photos" activeClassName={s.active}>
					<li>Фотографии</li>
				</NavLink>
				<NavLink to="/music" activeClassName={s.active}>
					<li>Музыка</li>
				</NavLink>
				<NavLink to="/games" activeClassName={s.active}>
					<li>Игры</li>
				</NavLink>
				<NavLink to="/settings" activeClassName={s.active}>
					<li>Настройки</li>
				</NavLink>
			</ul>
		</nav>
	);
}

export default Nav;
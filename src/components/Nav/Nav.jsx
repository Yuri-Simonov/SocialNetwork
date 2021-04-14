import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<NavLink to="/myPage">
					<li>Моя страница</li>
				</NavLink>
				<NavLink to="/news">
					<li>Новости</li>
				</NavLink>
				<NavLink to="/messages">
					<li>Сообщения</li>
				</NavLink>
				<NavLink to="/photos">
					<li>Фотографии</li>
				</NavLink>
				<NavLink to="/music">
					<li>Музыка</li>
				</NavLink>
				<NavLink to="/games">
					<li>Игры</li>
				</NavLink>
				<NavLink to="/settings">
					<li>Настройки</li>
				</NavLink>
			</ul>
		</nav>
	);
}

export default Nav;
import Header from './components/Header/Header';
import './App.css';
import './nullstyle.css';
import Nav from './components/Nav/Nav';
import MyPage from './components/MyPage/MyPage';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Photo from './components/Photo/Photo';
import Music from './components/Music/Music ';
import Games from './components/Games/Games';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
	return (
		<body className="page">
			<BrowserRouter>
				<div className="container">
					<div className="wrapper">
						<Header />
						<Nav />
						<div className="content">
							<Route path="/myPage" component={MyPage} />
							<Route path="/news" component={News} />
							<Route path="/messages" component={Messages} />
							<Route path="/photos" component={Photo} />
							<Route path="/music" component={Music} />
							<Route path="/games" component={Games} />
							<Route path="/settings" component={Settings} />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</body >
	);
}


export default App;


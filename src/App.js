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


const App = (props) => {

	return (
		<body className="page">
			<BrowserRouter>
				<div className="container">
					<div className="wrapper">
						<Header />
						<Nav />
						<div className="content">
							<Route path="/myPage" render={() => <MyPage state={props.state.myPage} friends={props.friends} addPost={props.addPost} />} />
							<Route path="/news" render={() => <News />} />
							<Route path="/messages" render={() => <Messages state={props.state.messagePage} />} />
							<Route path="/photos" render={() => <Photo />} />
							<Route path="/music" render={() => <Music />} />
							<Route path="/games" render={() => <Games />} />
							<Route path="/settings" render={() => <Settings />} />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</body >
	);
}


export default App;


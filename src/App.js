import Header from './components/Header/Header';
import './App.css';
import './nullstyle.css';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';


const App = () => {
	return (
		<body className="page">
			<div className="container">
				<div className="wrapper">
					<Header />
					<Nav />
					<Content />

				</div>
			</div>
		</body >
	);
}


export default App;


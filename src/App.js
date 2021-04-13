import Header from './components/Header';
import './App.css';
import './nullstyle.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
	return (
		<body className="page">
			<div className="container">
				<div className="wrapper">
					<Header />
					<Nav />
					<Content />
					<Footer />
				</div>
			</div>
		</body >
	);
}


export default App;


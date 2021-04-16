import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from "./components/Redux/state";
import { addMessage } from "./components/Redux/state";
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} friends={state.myPage.friendsNames} addPost={addPost} addMessage={addMessage} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
	_state: {
		myPage: {
			MyPageData: [
				{ id: 1, message: "Сегодня уже третий день, как я пытаюсь их понять... убейте меня, чтобы я не мучался...", },
				{ id: 2, message: "Долбанные прототипы... Кто может объяснить их мне?", },
				{ id: 3, message: "Сегодня начал изучать основы JavaScript", },
				{ id: 4, message: "Что-то тут совсем тихо", },
				{ id: 5, message: "Всем привет, я тут новенький!", },

			],
			/* friendsNames: [
				{ id: 1, name: "Света", },
				{ id: 2, name: "Рома", },
				{ id: 3, name: "Игорь", },
			], */

			newPostText: 'новое текстовое значение поста на своей странице',
		},
		friendsNames: ["Света", "Рома", "Игорь"],
		messagePage: {
			smsData: [
				{ id: 1, message: "Здарова", },
				{ id: 2, message: "Как ты?", },
				{ id: 3, message: "Ау", },
				{ id: 4, message: "Ты тут?", },
			],
			newMessageText: 'новое текстовое значение поста в сообщениях',
			messagesUser: [
				{ id: 1, name: "Маша", },
				{ id: 2, name: "Дима", },
				{ id: 3, name: "Катя", },
				{ id: 4, name: "Виктор", },
				{ id: 5, name: "Максим", },
				{ id: 6, name: "Григорий", },
			],
		},

	},
	/* _callSubscriber() {
		console.log("dfd");
	}, */

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	//Добавление новых сообщений на стене "Моя страница"
	_addPost() {
		let newPost = {

			id: 6,
			message: this._state.myPage.newPostText,
		};

		this._state.myPage.MyPageData.push(newPost);
		this._state.myPage.newPostText = "";
		this._callSubscriber(this._state);
	},
	//Добавление новых сообщений в переписках
	_addMessage() {

		let newPost = {
			id: 5,
			message: this._state.messagePage.newMessageText,
		};

		this._state.messagePage.smsData.push(newPost);
		this._state.messagePage.newMessageText = "";
		this._callSubscriber(this._state);
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			this._addPost();

		} else if (action.type === ADD_MESSAGE) {
			this._addMessage();

			//Обновление сообщений побуквенно при их вводе в textarea на стене "Моя страница"
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.myPage.newPostText = action.newText;
			this._callSubscriber(this._state);

			//Обновление сообщений побуквенно при их вводе в textarea на стене "Cообщения"
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.messagePage.newMessageText = action.newMessage;
			this._callSubscriber(this._state);
		}
	}

}

export const AddPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (newText) => ({
	type: UPDATE_NEW_POST_TEXT, newText: newText,
});

export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (newMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage,
});


export default store;

//Глобальное присваивание
window.store = store;
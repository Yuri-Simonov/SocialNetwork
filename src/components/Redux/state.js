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
			friendsNames: ["Света", "Рома", "Игорь"],
			newPostText: 'новое текстовое значение поста на своей странице',
		},
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
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log("dfd");
	},
	//Добавление новых сообщений на стене "Моя страница"
	addPost() {
		let newPost = {

			id: 6,
			message: this._state.myPage.newPostText,
		};

		this._state.myPage.MyPageData.push(newPost);
		this._state.myPage.newPostText = "";
		this._callSubscriber(this._state);
	},
	//Добавление новых сообщений в переписках
	addMessage() {

		let newPost = {
			id: 5,
			message: this._state.messagePage.newMessageText,
		};

		this._state.messagePage.smsData.push(newPost);
		this._state.messagePage.newMessageText = "";
		this._callSubscriber(this._state);
	},
	//Обновление сообщений побуквенно при их вводе в textarea на стене "Моя страница"
	updateNewPostText(newText) {

		this._state.myPage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	//Обновление сообщений побуквенно при их вводе в textarea на стене "Cообщения"
	updateNewMessageText(newMessage) {

		this._state.messagePage.newMessageText = newMessage;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
}


export default store;

//Глобальное присваивание
window.store = store;
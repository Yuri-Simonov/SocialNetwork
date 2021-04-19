import friendsNameReducer from "./friendsNames-reducer";
import messagePageReducer from "./messagePage-reducer";
import myPageReducer from "./myPage-reducer";


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


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.myPage = myPageReducer(this._state.myPage, action)
		this._state.messagePage = messagePageReducer(this._state.messagePage, action)
		this._state.friendsNames = friendsNameReducer(this._state.friendsNames, action)

		this._callSubscriber(this._state);
	}

}



export default store;

//Глобальное присваивание
window.store = store;
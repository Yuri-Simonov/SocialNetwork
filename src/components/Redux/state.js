import { rerenderEntireTree } from '../../render';

let state = {
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

}

//Добавление новых сообщений на стене "Моя страница"
export let addPost = () => {

	let newPost = {
		id: 6,
		message: state.myPage.newPostText,
	};

	state.myPage.MyPageData.push(newPost);
	state.myPage.newPostText = "";
	rerenderEntireTree(state);
};

//Добавление новых сообщений в переписках
export let addMessage = () => {

	let newPost = {
		id: 5,
		message: state.messagePage.newMessageText,
	};

	state.messagePage.smsData.push(newPost);
	state.messagePage.newMessageText = "";
	rerenderEntireTree(state);
};

//Обновление сообщений побуквенно при их вводе в textarea на стене "Моя страница"
export let updateNewPostText = (newText) => {

	state.myPage.newPostText = newText;
	rerenderEntireTree(state);
};

//Обновление сообщений побуквенно при их вводе в textarea на стене "Cообщения"
export let updateNewMessageText = (newMessage) => {

	state.messagePage.newMessageText = newMessage;
	rerenderEntireTree(state);
};



export default state;
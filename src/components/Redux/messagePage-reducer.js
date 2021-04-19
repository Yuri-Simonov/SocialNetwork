const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const messagePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newPost = {
				id: 5,
				message: state.newMessageText,
			};

			state.smsData.push(newPost);
			state.newMessageText = "";
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessage;
		default:
			return state;
	}
}



export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (newMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage,
});


export default messagePageReducer;
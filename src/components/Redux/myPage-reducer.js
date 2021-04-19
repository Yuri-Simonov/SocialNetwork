const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
	MyPageData: [
		{ id: 1, message: "Сегодня уже третий день, как я пытаюсь их понять... убейте меня, чтобы я не мучался...", },
		{ id: 2, message: "Долбанные прототипы... Кто может объяснить их мне?", },
		{ id: 3, message: "Сегодня начал изучать основы JavaScript", },
		{ id: 4, message: "Что-то тут совсем тихо", },
		{ id: 5, message: "Всем привет, я тут новенький!", },

	],
	newPostText: 'новое текстовое значение поста на своей странице',
}

const myPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {

				id: 6,
				message: state.newPostText,
			};

			state.MyPageData.push(newPost);
			state.newPostText = "";
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export const AddPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (newText) => ({
	type: UPDATE_NEW_POST_TEXT, newText: newText,
});


export default myPageReducer;
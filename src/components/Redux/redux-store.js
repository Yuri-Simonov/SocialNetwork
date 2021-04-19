import { combineReducers, createStore } from "redux";
import friendsNameReducer from "./friendsNames-reducer";
import messagePageReducer from "./messagePage-reducer";
import myPageReducer from "./myPage-reducer";



let reducers = combineReducers({
	myPage: myPageReducer,
	messagePage: messagePageReducer,
	friendsNames: friendsNameReducer,
})

let store = createStore(reducers);

export default store;
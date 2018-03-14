import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import posts from './posts.jsx'

const reducers = {
	posts: posts,
	form: formReducer
}
export default combineReducers(reducers)
import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

// the mapping of our state
const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import postReducer from './slices/postSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
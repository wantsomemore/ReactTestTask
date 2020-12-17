import {combineReducers} from 'redux';
import UsersListReducer from './UsersListReducer';
import PostsListReducer from './PostsListReducer';
import PostListReducer from './PostListReducer'
// Creating a RootReducer that will be include all the reducers into one
const RootReducer = combineReducers({
  UsersList: UsersListReducer,
  PostsList: PostsListReducer,
  PostList: PostListReducer
});

export default RootReducer;
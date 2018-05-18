import { combineReducers } from 'redux';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    user:userReducer, //all user data now on state.user
});

export default rootReducer;
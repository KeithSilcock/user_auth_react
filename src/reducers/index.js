import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    user:userReducer, //all user data now on state.user
    form: formReducer, //allows us to update form data via state
});

export default rootReducer;
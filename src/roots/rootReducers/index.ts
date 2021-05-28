import { combineReducers } from 'redux';
import userPageReducer from '../../managers/usersPageManager/reducer';
import languageReducer from '../../managers/languageManager/reducer';

const rootReducer = combineReducers({
    userPageReducer,
    languageReducer,
});

export default rootReducer;
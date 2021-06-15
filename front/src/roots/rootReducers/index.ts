import { combineReducers } from 'redux';
import languageReducer from '../../managers/languageManager/reducer';
import requestsPageReducer from '../../managers/requestsPageManager/reducer';

const rootReducer = combineReducers({
    languageReducer,
    requestsPageReducer,
});

export default rootReducer;
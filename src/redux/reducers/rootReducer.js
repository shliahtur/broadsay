import { combineReducers } from "redux";
import auth from './authReducer';
import assets from './assetsReducer';

const rootReducer = combineReducers({
    auth,
    assets
});

export default rootReducer;

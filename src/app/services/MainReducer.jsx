import { combineReducers } from 'redux';
import UIReducer from './UIReducer.jsx';

const MainReducer = combineReducers({
    UI: UIReducer
});

export default MainReducer;

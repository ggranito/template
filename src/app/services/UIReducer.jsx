import { combineReducers } from 'redux';
import { ActionTypes } from './Actions.jsx';

const { DRAWER_CHANGE } = ActionTypes;

const drawerReducer = (state = false, action) => {
    if (action.type == DRAWER_CHANGE) {
        return action.open
    }
    return state;
}

const UIReducer = combineReducers({
    drawerOpen: drawerReducer
});

export default UIReducer;
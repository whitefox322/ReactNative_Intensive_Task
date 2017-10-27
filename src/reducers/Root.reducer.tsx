import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';

import LayoutReducer from './Layout.reducer';

const rootReducer = combineReducers({
    layout: LayoutReducer,
    router: routerReducer
});

export default rootReducer;
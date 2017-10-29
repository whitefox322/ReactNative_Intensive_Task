import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';

import HomePageReducer from './HomePage.reducer';
import SearchPageReducer from './SearchPage.reducer';

const rootReducer = combineReducers({
    home: HomePageReducer,
    search: SearchPageReducer,
    router: routerReducer
});

export default rootReducer;
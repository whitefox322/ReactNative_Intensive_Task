import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {routerMiddleware} from 'react-router-redux';
import rootReducer from "../reducers/Root.reducer";
import {history} from "../router/RootRouter";

const loggerMiddleware = createLogger();
const routeMiddleware = routerMiddleware(history);

export default function storeConfig(initState?: any) {
    return createStore(
        rootReducer,
        initState,
        composeWithDevTools(
            applyMiddleware(
                routeMiddleware,
                thunkMiddleware,
                loggerMiddleware
            )
        )
    );
}
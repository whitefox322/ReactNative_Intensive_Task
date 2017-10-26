import React from "react";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import storeConfig from "../store/storeConfig";
import createBrowserHistory from 'history/createBrowserHistory';

import LayoutComponent from "../components/LayoutComponent";

const store = storeConfig();
export const history = createBrowserHistory();

const RootRouter = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LayoutComponent/>
        </ConnectedRouter>
    </Provider>
);

export default RootRouter;
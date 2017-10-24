import React from "react";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import {Switch} from "react-router-dom";
import storeConfig from "../store/storeConfig";
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from "../pages/Layout";

const store = storeConfig();
export const history = createBrowserHistory();

const RootRouter = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Layout/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default RootRouter;
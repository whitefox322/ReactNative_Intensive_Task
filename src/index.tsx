import React from "react";
import ReactDOM from "react-dom";

import 'components/main.less';
import RootRouter from "./router/RootRouter";

const mountPoint = document.getElementById("root");

const render = (Comp: any) =>
    ReactDOM.render(
        <Comp/>,
        mountPoint
    );

render(RootRouter);


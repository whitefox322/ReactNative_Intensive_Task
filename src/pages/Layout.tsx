import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import uaUA from "../resources/ant/localization/ua_UA";
import {LocaleProvider} from "antd";

import {tryGetTweets} from "actions/Layout.action";

interface ILayoutProps {
    getTweets: () => void;
}

class Layout extends Component<ILayoutProps, any> {
    componentDidMount() {
        this.props.getTweets();
    }

    render() {
        return (
            <LocaleProvider locale={uaUA}>
                <div style={{fontSize: 36}}>Hello React Native!</div>
            </LocaleProvider>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: () => dispatch(tryGetTweets())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import uaUA from "../resources/ant/localization/ua_UA";
import {LocaleProvider} from "antd";

interface ILayoutProps {

}

class Layout extends Component<ILayoutProps, any> {
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
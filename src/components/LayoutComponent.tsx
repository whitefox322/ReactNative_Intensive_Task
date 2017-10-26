import React, {Component} from "react";
import {Link, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import uaUA from "../resources/ant/localization/ua_UA";
import {LocaleProvider, Layout, Input, Icon, Button, Form} from 'antd';
import {WrappedFormUtils} from "antd/lib/form/Form";

const {Header, Content, Footer} = Layout;

import whitefox from "images/white_fox.png";
import logo from "images/logo2.png";

interface ILayoutProps {
    getTweets: () => void;
    form: WrappedFormUtils;
}

class LayoutComponent extends Component<ILayoutProps, any> {
    componentDidMount() {
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {validateFields} = this.props.form;

        validateFields((err, values) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log(values);
                this.emptySearchField();
            }
        });
    };

    emptySearchField = () => {
        this.props.form.setFieldsValue({
            searchString: ''
        });
    };

    render() {
        const prefix = <Icon type="search"/>;
        const {getFieldDecorator} = this.props.form;

        return (
            <LocaleProvider locale={uaUA}>
                <Layout>
                    <Header>
                        <div className='header__left'>
                            <Link to='/'>
                                <img src={logo} alt="Logo" className='header__logo'/>
                                <div className='header__title'>
                                    <span className='header__title--start'>Dark</span>Twitter
                                </div>
                            </Link>
                        </div>
                        <Form className='header__right' onSubmit={this.handleFormSubmit}>
                            {getFieldDecorator('searchString', {
                                initialValue: ''
                            })(
                                <Input
                                    placeholder="I'm looking for..."
                                    prefix={prefix}
                                />
                            )}
                            <Button type="dashed" onClick={this.handleFormSubmit}>
                                Search
                            </Button>
                        </Form>
                    </Header>
                    <Content>
                        <div className='container'>
                            <div style={{fontSize: 36}}>Hello React Native!</div>
                            <div style={{fontSize: 36}}>Hello React Native!</div>
                            <div style={{fontSize: 36}}>Hello React Native!</div>
                            <div style={{fontSize: 36}}>Hello React Native!</div>
                            <div style={{fontSize: 36}}>Hello React Native!</div>
                        </div>
                    </Content>
                    <Footer>
                        Developed by &copy;
                        <a href="https://www.facebook.com/profile.php?id=100011378030465" className='footer__link'>
                            WhiteFox
                        </a>
                        <img src={whitefox} alt="WhiteFox" className='footer__img'/>
                    </Footer>
                </Layout>
            </LocaleProvider>
        );
    }
}

const WrappedLayout: any = Form.create<any>({
    mapPropsToFields() {
        return {};
    }
})(LayoutComponent);


const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLayout);
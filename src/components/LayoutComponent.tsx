import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import uaUA from "../resources/ant/localization/ua_UA";
import {LocaleProvider, Layout} from 'antd';
const {Header, Content, Footer} = Layout;

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import whitefox from "images/white_fox.png";
import logo from "images/logo2.png";

export const LayoutComponent = (props: any) => {
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
                    </Header>
                    <Content>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route exact path='/search' component={SearchPage}/>
                        </Switch>
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
};
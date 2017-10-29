import React, {Component} from "react";
import {connect} from "react-redux";
import {Input, Icon, Button, Form, Spin} from 'antd';
import {WrappedFormUtils} from "antd/lib/form/Form";

import {tryGetTweets} from 'actions/HomePage.action';
import {TwitterComponent} from './TwitterComponent';
import {PageNotFound} from "./PageNotFound";

interface IHomePageProps {
    tweets: Array<any>;
    history: any;
    getTweets: (q: string, size: number) => void;
    form: WrappedFormUtils;
}

class HomePage extends Component<IHomePageProps, any> {
    state = {
        isLoading: false
    };

    componentDidMount() {
        this.props.getTweets('%23javascript', 30);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {validateFields, resetFields} = this.props.form;

        validateFields((err, values) => {
            if (err) {
                console.log(err);
                return;
            } else {
                this.props.history.push(`/search?q=${values.searchString}`);
                resetFields();
            }
        });
    };

    render() {
        if (!this.props.tweets.length) {
            if (!this.state.isLoading) {
                setTimeout(() => {
                    this.setState({
                        isLoading: !this.state.isLoading
                    });
                }, 3000);
                return <Spin size='large' tip='Loading...'/>;
            } else {
                return <PageNotFound/>;
            }
        }
        const prefix = <Icon type="search"/>;
        const {getFieldDecorator} = this.props.form;
        const {tweets} = this.props;

        return (
            <div className='container'>
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
                <div id='#start'/>
                {
                    tweets.map((item, index) => {
                        return <TwitterComponent
                            key={index}
                            data={item}
                            />
                    })
                }
                <div className='container__bottom'>
                    <div className='container__bottom--link' onClick={() => {scrollTo(0, 0)}}>
                        Go to top
                    </div>
                </div>
            </div>
        );
    }
}

const WrappedHomePage: any = Form.create<any>({
    mapPropsToFields() {
        return {};
    }
})(HomePage);

const mapStateToProps = (state, ownProps) => {
    return {
        tweets: state.home.tweets,
        history: ownProps.history
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: (query, size) => dispatch(tryGetTweets(query, size))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHomePage);
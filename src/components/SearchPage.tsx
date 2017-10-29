import React, {Component} from "react";
import {connect} from "react-redux";
import {Spin} from 'antd';

import results from 'images/results.png';
import {tryGetTweets} from 'actions/SearchPage.action';
import {TwitterComponent} from './TwitterComponent';
import {PageNotFound} from "./PageNotFound";

interface ISearchPageProps {
    tweets: Array<any>;
    getTweets: (q: string, size: number) => void;
    location: any;
}

class SearchPage extends Component<ISearchPageProps, any> {
    state = {
        isLoading: false
    };

    componentDidMount() {
        if(this.getQueryString()) {
            this.props.getTweets(this.getQueryString(), 30);
        }
    }

    getQueryString = () => {
        const string = location.search.split('=', 2);
        if(string[0] === '?q') {
            return string[1];
        }
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

        return (
            <div className='container'>
                <div className='header__right'>
                    <img src={results} alt="results" className='header__results'/>
                </div>
                <div className='container__top'>
                    Search Results:
                </div>
                {
                    this.props.tweets.map((item, index) => {
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

const mapStateToProps = (state, ownProps) => {
    return {
        tweets: state.search.tweets,
        location: ownProps.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: (query, size) => dispatch(tryGetTweets(query, size))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
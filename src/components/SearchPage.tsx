import React, {Component} from "react";
import {connect} from "react-redux";

import {tryGetTweets} from 'actions/Layout.action';
import {TwitterComponent} from './TwitterComponent';
import {PageNotFound} from "./PageNotFound";

interface ISearchPageProps {
    tweets: Array<any>;
    getTweets: (q: string, size: number) => void;
    location: any;
}

class SearchPage extends Component<ISearchPageProps, any> {
    componentDidMount() {
        if(this.getQueryString()) {
            this.props.getTweets(this.getQueryString(), 20);
        }
    }

    getQueryString = () => {
        const string = location.search.split('=', 2);
        if(string[0] === '?q') {
            return string[1];
        }
    };

    render() {
        if(!this.props.tweets.length) {
            return <PageNotFound/>;
        }
        return (
            <div className='container'>
                {
                    this.props.tweets.map((item, index) => {
                        return <TwitterComponent
                            key={index}
                            data={item}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tweets: state.layout.tweets,
        location: ownProps.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: (query, size) => dispatch(tryGetTweets(query, size))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
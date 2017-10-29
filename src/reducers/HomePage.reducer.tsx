import {LOAD__HOME__TWEETS} from 'constants/HomePage.constants';

const initialState = {
    tweets: []
};

const HomePageReducer = (state: any = initialState, action) => {
    switch (action.type) {
        case LOAD__HOME__TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        default:
            return state;
    }
};

export default HomePageReducer;


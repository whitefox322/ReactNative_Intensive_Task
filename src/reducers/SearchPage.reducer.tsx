import {LOAD__SEARCHED__TWEETS} from 'constants/SearchPage.constants';

const initialState = {
    tweets: []
};

const SearchPageReducer = (state: any = initialState, action) => {
    switch (action.type) {
        case LOAD__SEARCHED__TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        default:
            return state;
    }
};

export default SearchPageReducer;


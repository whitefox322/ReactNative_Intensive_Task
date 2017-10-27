import {LOAD__TWEETS} from 'constants/Layout.constants';

const initialState = {
    tweets: []
};

const LayoutReducer = (state: any = initialState, action) => {
    switch (action.type) {
        case LOAD__TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        default:
            return state;
    }
};

export default LayoutReducer;


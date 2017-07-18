import {
    INITIALIZE_APP
} from './Country.Action';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    initialized: false,
    countries: [],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case INITIALIZE_APP + "_FULFILLED":
            {
                let data = action.payload;
                return {
                    ...state,
                    initialized: true,
                    fetching: false,
                    fetched: true,
                    countries: data,
                };
            }
    }
    return state;
}
import {
    INITIALIZE_APP
} from './Home.Action';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    initialized: false,
    rooms: [],
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
                    rooms: data,
                };
            }
    }
    return state;
}
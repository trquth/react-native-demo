import {
    INITIALIZE_APP
} from './City.Action';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    initialized: false,
    cities: [],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case INITIALIZE_APP + "_FULFILLED":
            {
                let cities = [];
                let data = action.payload;
                if (data) {
                    data.map(item => item.cities.map(city => cities.push(city)));
                }
                return {
                    ...state,
                    initialized: true,
                    fetching: false,
                    fetched: true,
                    cities: cities,
                };
            }
    }
    return state;
}
import {
    LOCATION_TOGGLE_COUNTRY_MODAL,
    LOCATION_TOGGLE_CITY_MODAL
} from './LocationPopUp.Action';

const initialState = {
    countryVisible: false,
    cityVisible: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOCATION_TOGGLE_COUNTRY_MODAL':
            return {
                ...state,
                countryVisible: action.open
            }
        case 'LOCATION_TOGGLE_CITY_MODAL':
            return {
                ...state,
                cityVisible: action.open
            }
    }
    return state;
}
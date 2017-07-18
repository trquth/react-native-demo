import {
    SEARCH_SELECT_COUNTRY,
    SEARCH_SELECT_CITY,
    SEARCH_CHANGE_INPUT_DATA
} from './SearchRoom.Action';

const initialState = {
    selectedCountry: {
        id: '',
        country_name: ''
    },
    selectedCity: {
        id: '',
        city_name: ''
    },
    inputdata: {
        startDate: '',
        endDate: ''
    }
};


export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_SELECT_COUNTRY':
            return {
                ...state, selectedCountry: {
                    ...state.selectedCountry,
                    id: action.selectedObject.id,
                    country_name: action.selectedObject.country_name
                }
            }
        case 'SEARCH_SELECT_CITY':
            return {
                ...state,
                selectedCity: {
                    ...state.selectedCity,
                    id: action.selectedObject.id,
                    city_name: action.selectedObject.city_name
                }
            }
        case 'SEARCH_CHANGE_INPUT_DATA':
            return {
                ...state,
                inputdata: {
                    ...state.inputdata,
                    [action.field]: action.inputData
                }
            }
        default: return state;
    }
}
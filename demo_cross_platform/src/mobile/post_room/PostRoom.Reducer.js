import {
    POSTROOM_SELECT_COUNTRY,
    POSTROOM_SELECT_CITY,
    POSTROOM_CHANGE_INPUT_DATA
    // SEARCH_SELECT_DATE
} from './PostRoom.Action';

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
        title: '',
        address: '',
        shortDescription: '',
        longDescription: '',
        startDate: '',
        endDate: ''
    }
};


export default function (state = initialState, action) {
    switch (action.type) {
        case 'POSTROOM_SELECT_COUNTRY':
            return {
                ...state, selectedCountry: {
                    ...state.selectedCountry,
                    id: action.selectedObject.id,
                    country_name: action.selectedObject.country_name
                }
            }
        case 'POSTROOM_SELECT_CITY':
            return {
                ...state,
                selectedCity: {
                    ...state.selectedCity,
                    id: action.selectedObject.id,
                    city_name: action.selectedObject.city_name
                }
            }
        case 'POSTROOM_CHANGE_INPUT_DATA':
            return {
                ...state,
                inputdata: {
                    ...state.inputdata,
                    [action.field]: action.inputData,
                }
            }
        // case 'SEARCH_SELECT_DATE':
        //     return {
        //         ...state,
        //         date: {
        //             ...state.date,
        //             date: action.selectedObject
        //         }
        //     }
        default: return state;
    }
}
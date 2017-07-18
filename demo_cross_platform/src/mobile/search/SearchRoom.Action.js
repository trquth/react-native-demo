export const SEARCH_SELECT_COUNTRY = "SEARCH_SELECT_COUNTRY";
export function selectCountry(obj, action) {
    if (action) action();
    return (dispatch) => {
        return dispatch({
            type: SEARCH_SELECT_COUNTRY,
            selectedObject: obj
        })
    };

}

export const SEARCH_SELECT_CITY = "SEARCH_SELECT_CITY";
export function selectCity(obj, action) {
    if (action) action();
    return (dispatch) => {
        return dispatch({
            type: SEARCH_SELECT_CITY,
            selectedObject: obj
        })
    }
}

export const SEARCH_CHANGE_INPUT_DATA = "SEARCH_CHANGE_INPUT_DATA";
export function changeInputField(data, field) {
    return (dispatch) => {
        return dispatch({
            type: SEARCH_CHANGE_INPUT_DATA,
            field: field,
            inputData: data
        })
    }
}
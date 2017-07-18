export const POSTROOM_SELECT_COUNTRY = "POSTROOM_SELECT_COUNTRY";
export function selectCountry(obj, action) {
    if (action) action();
    return (dispatch) => {
        return dispatch({
            type: POSTROOM_SELECT_COUNTRY,
            selectedObject: obj
        })
    };

}

export const POSTROOM_SELECT_CITY = "POSTROOM_SELECT_CITY";
export function selectCity(obj, action) {
    if (action) action();
    return (dispatch) => {
        return dispatch({
            type: POSTROOM_SELECT_CITY,
            selectedObject: obj
        })
    }
}

export const POSTROOM_CHANGE_INPUT_DATA = "POSTROOM_CHANGE_INPUT_DATA";
export function changeInputForField(obj, field) {
    return (dispatch) => {
        return dispatch({
            type: POSTROOM_CHANGE_INPUT_DATA,
            field: field,
            inputData: obj
        })
    }
}

// export const SEARCH_SELECT_DATE = "SEARCH_SELECT_DATE";
// export function selectDate(obj) {
//     return (dispatch) => {
//         return dispatch({
//             type: SEARCH_SELECT_DATE,
//             selectedObject: obj
//         })
//     }
// }
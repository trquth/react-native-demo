export const LOCATION_TOGGLE_COUNTRY_MODAL = "LOCATION_TOGGLE_COUNTRY_MODAL";
export function toggleCountryModal(open) {
    return (dispatch) => {
        return dispatch({
            type: LOCATION_TOGGLE_COUNTRY_MODAL,
            open: open
        })
    }
}

export const LOCATION_TOGGLE_CITY_MODAL = "LOCATION_TOGGLE_CITY_MODAL";
export function toggleCityModal(open) {
    return (dispatch) => {
        return dispatch({
            type: LOCATION_TOGGLE_CITY_MODAL,
            open: open
        })
    }
}
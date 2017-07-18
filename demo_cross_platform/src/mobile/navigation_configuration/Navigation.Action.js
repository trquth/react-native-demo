export function goToScreen(screen) {
    return (dispatch, getState) => {
        return dispatch({
            type: screen
        })
    }
}
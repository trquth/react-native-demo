export const ADD_IMAGE_SELECT_IMAGE = "ADD_IMAGE_SELECT_IMAGE";
export function selectImage(data) {
    return (dispatch) => {
        return dispatch({
            type: ADD_IMAGE_SELECT_IMAGE,
            data: data
        })
    }
}

export const ADD_IMAGE_REMOVE_IMAGE = "ADD_IMAGE_REMOVE_IMAGE";
export function removeImageById(id) {
    return (dispatch) => {
        return dispatch({
            type: ADD_IMAGE_REMOVE_IMAGE,
            data: id
        })
    }
}

export const ADD_IMAGE_CLEARUP_LIST_IMAGES = "ADD_IMAGE_CLEARUP_LIST_IMAGES";
export function clearUpListImages() {
    return (dispatch) => {
        return dispatch({
            type: ADD_IMAGE_CLEARUP_LIST_IMAGES,
            data: []
        })
    }
}
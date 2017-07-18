const TYPE_PREFIX = "@@home/list_rooms/";
export const INITIALIZE_APP = TYPE_PREFIX + "INITIALIZE_APP";
import FetchHelper from '../../ultilities/FetchHelper';
import data from '../../assets/seed_data/data.json';

export function initializeApp() {
    return (dispatch, getState) => {
        return dispatch({
            type: INITIALIZE_APP,
            payload: new Promise((resolve) => {
                setTimeout(function () {
                    resolve(data);
                }, 200);
            })
        })
    }
}
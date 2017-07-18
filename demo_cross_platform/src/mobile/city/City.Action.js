const TYPE_PREFIX = "@@city/countrywithcities/";
export const INITIALIZE_APP = TYPE_PREFIX + "INITIALIZE_APP";
import FetchHelper from '../../ultilities/FetchHelper';
import countrywithcities from '../../assets/seed_data/countrywithcities.json';

export function initializeApp() {
    return (dispatch, getState) => {
        return dispatch({
            type: INITIALIZE_APP,
            payload: new Promise((resolve) => {
                setTimeout(function () {
                    resolve(countrywithcities);
                }, 200);
            })
        })
    }
}
import { NavigationActions } from 'react-navigation';
import { NavigationMobile } from './NavigationConfiguration';
import * as constant from './../../assets/constant/constant';

const initialState = {
    index: 0,
    routes: [
        { key: 'PostRoomScreen', routeName: 'PostRoomScreen' },
    ],
}

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case constant.HOME_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'HomeScreen' }), state);
        case constant.SEARCH_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'SearchRoomScreen' }), state);
        case constant.POST_ROOM_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'PostRoomScreen' }), state);
        case constant.LOGIN_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'LoginScreen' }), state);
        default:
            return NavigationMobile.router.getStateForAction(action, state);
    }
}
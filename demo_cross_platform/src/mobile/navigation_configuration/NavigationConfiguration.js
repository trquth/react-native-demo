import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../home/Home.Container';
import RoomDetail from '../room_detail/RoomDetail.Container';
import SearchRoom from '../search/SearchRoom.Container';
import LoginScreen from '../login/Login.Container';
import PostRoom from '../post_room/PostRoom.Container';
import Country from '../country/Country.Container';
import City from '../city/City.Container';
import * as constant from '../../assets/constant/constant';

const routeConfiguration = {
    HomeScreen: {
        screen: HomeScreen,

    },
    RoomDetailScreen: {
        screen: RoomDetail
    },
    SearchRoomScreen: {
        screen: SearchRoom,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    PostRoomScreen: {
        screen: PostRoom
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    CountryScreen: {
        screen: Country
    },
    CityScreen: {
        screen: City
    }
}

const stackNavigatorConfiguration = {
    initialRouteName: 'Activity',
    navigationOptions: {
        headerStyle: { backgroundColor: constant.BACKGROUND }
    },
    headerMode: 'screen'
}

const NavigationMobile = StackNavigator({
    ...routeConfiguration,
},
    stackNavigatorConfiguration);

const NavigationWithoutRedux = () => <NavigationMobile />;

export {
    NavigationMobile,
    NavigationWithoutRedux
}

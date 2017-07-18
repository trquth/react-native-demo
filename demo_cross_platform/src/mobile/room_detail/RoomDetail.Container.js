import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import RoomDetailView from './presenters/RoomDetail.View';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import SearchIcon from './../action_icon/presenters/SearchIcon.View';
import AddRoomIcon from './../action_icon/presenters/AddRoomIcon.View';
import BackIcon from './../action_icon/presenters/BackIcon.View';

const roomDetailInScreen = (MainLayout, RoomDetail, SideMenu, SearchIcon, AddIcon, BackIcon) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
            this.goToHomeScreen = this.goToHomeScreen.bind(this);
            this.goToPostRoomScreen = this.goToPostRoomScreen.bind(this);
            this.goToSearchScreen = this.goToSearchScreen.bind(this);
            this.goToLogin = this.goToLogin.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({
                onOpenSideMenu: this.onOpenSideMenu,
                goToHomeScreen: this.goToHomeScreen,
                goToPostRoomScreen: this.goToPostRoomScreen,
                goToSearchScreen: this.goToSearchScreen,
                goToLogin: this.goToLogin
            });
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        goToHomeScreen() {
            this.props.navigation.navigate("HomeScreen");
        }

        goToPostRoomScreen() {
            this.props.navigation.navigate("PostRoomScreen");
        }

        goToSearchScreen() {
            this.props.navigation.navigate("SearchRoomScreen");
        }

        goToLogin() {
            this.props.navigation.navigate("LoginScreen")
        }

        static navigationOptions = ({ navigation }) => {
            let navParams = { ...navigation }
            return {
                title: <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Room</Text>,
                headerLeft: <BackIcon navigation={() => navParams.state.params.goToHomeScreen()} />,
                headerRight: <View style={{
                    flexDirection: 'row', flex: 1,
                }}>
                    <SearchIcon navigation={() => navParams.state.params.goToSearchScreen()} />
                    <AddIcon navigation={() => navParams.state.params.goToPostRoomScreen()} />
                </View>,
            }
        }

        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <RoomDetail goToLogin={this.goToLogin}/>
                </MainLayout>
            );
        }
    }
}



export default RoomDetail = roomDetailInScreen(MainLayoutContainer, RoomDetailView,
    SideMenuIcon, SearchIcon, AddRoomIcon, BackIcon)
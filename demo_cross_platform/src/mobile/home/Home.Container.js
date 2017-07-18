import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ListRoom from './ListRoom.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import SearchIcon from './../action_icon/presenters/SearchIcon.View';
import AddRoomIcon from './../action_icon/presenters/AddRoomIcon.View';
import { initializeApp } from './Home.Action';

const homeInScreen = (MainLayout, ListRoom, SideMenu, SearchIcon, AddIcon) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
            this.goToSearchScreen = this.goToSearchScreen.bind(this);
            this.goToPostRoomScreen = this.goToPostRoomScreen.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({
                onOpenSideMenu: this.onOpenSideMenu,
                goToSearchScreen: this.goToSearchScreen,
                goToPostRoomScreen: this.goToPostRoomScreen
            });
            this.props.initializeApp();
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        goToSearchScreen() {
            this.props.navigation.navigate("SearchRoomScreen");
        }

        goToPostRoomScreen() {
            this.props.navigation.navigate("PostRoomScreen");
        }

        static navigationOptions = ({ navigation }) => {
            let navParams = { ...navigation }
            return {
                headerTitle: <Text style={{
                    fontFamily: 'HelveticaNeue-Medium',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    fontSize: 20,
                    color: 'white'
                }}>Home</Text>,
                headerLeft: <SideMenu onOpenSideMenu={() => navigation.state.params.onOpenSideMenu()} />,
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
                    <ListRoom
                        rooms={this.props.rooms}
                        navigation={this.props.navigation} />
                </MainLayout>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.home.rooms
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeApp
    }, dispatch);
}

export default HomeScreen = connect(mapStateToProps, mapDispatchToProps)(homeInScreen(MainLayoutContainer,
    ListRoom, SideMenuIcon, SearchIcon, AddRoomIcon))
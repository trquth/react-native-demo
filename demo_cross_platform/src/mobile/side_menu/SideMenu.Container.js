import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Text } from 'react-native';
import MenuContainer from '../3lo_left_menu/Menu.Container';
import * as constant from './../../assets/constant/constant';
import { goToScreen } from '../navigation_configuration/Navigation.Action';


const renderSideMenuInScreen = (Menu) => {
    return class extends Component {
        constructor() {
            super()
            this.goToHome = this.goToHome.bind(this);
            this.goToSearch = this.goToSearch.bind(this);
            this.goToPostRoom = this.goToPostRoom.bind(this);
            this.goToLogin = this.goToLogin.bind(this);
        }
        goToHome() {
            this.props.goToScreen(constant.HOME_SCREEN);
        }

        goToSearch() {
            this.props.goToScreen(constant.SEARCH_SCREEN);
        }

        goToPostRoom() {
            this.props.goToScreen(constant.POST_ROOM_SCREEN);
        }

        goToLogin() {
            this.props.goToScreen(constant.LOGIN_SCREEN);
        }

        render() {
            return (
                <Menu
                    goToHome={this.goToHome}
                    goToSearch={this.goToSearch}
                    goToPostRoom={this.goToPostRoom}
                    goToLogin={this.goToLogin}
                />
            )
        }
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    goToScreen
}, dispatch));

export default SideMenuContainer = connect(null, mapDispatchToProps)(renderSideMenuInScreen(MenuContainer)); 

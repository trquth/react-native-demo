import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import LoginScreenView from './presenters/Login.View';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton, LoginManager
} = FBSDK;

const renderLoginScreenInScreen = (LoginScreen) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.goToHome = this.goToHome.bind(this);
            this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        }

        goToHome() {
            this.props.navigation.navigate("HomeScreen")
        }

        handleFacebookLogin() {
            LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
                (result) => {
                    if (result.isCancelled) {
                        console.log('Login cancelled')
                    } else {
                        console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                    }
                },
                (error) => {
                    console.log('Login fail with error: ' + error)
                }
            )
        }

        render() {
            return (
                <LoginScreen navigation={this.goToHome} handleFacebookLogin={this.handleFacebookLogin} />
            );
        }
    }
}



export default LoginScreen = renderLoginScreenInScreen(LoginScreenView)
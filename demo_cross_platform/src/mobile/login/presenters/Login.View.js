import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, Dimensions, Image,
    ScrollView
} from 'react-native';
const { height, width } = Dimensions.get('window');

const renderLoginScreen = () => {
    return class extends Component {
        render() {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <Image resizeMode="stretch"
                        source={require('../../../assets/images/vietbalo/background.png')} />
                    <View style={{
                        flex: 1, position: 'absolute'
                        , top: 0, bottom: 0, right: 0, left: 0,
                        justifyContent: 'center',
                    }}>
                        <TouchableHighlight style={{
                            backgroundColor: '#203f7e',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            marginLeft: 50,
                            marginRight: 50
                        }} onPress={this.props.handleFacebookLogin}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'center',
                                alignContent: 'center', alignItems: 'center',
                                flex: 1,
                            }}>
                                <View style={{ backgroundColor: '#193264', flex: 0.5, alignItems: 'center' }}>
                                    <Image style={{ height: 20, width: 10, margin: 10 }}
                                        source={require('../../../assets/images/vietbalo/f.png')} />
                                </View>
                                <View style={{ flex: 3, alignItems: 'center' }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                    }}>Sign In With Facebook</Text>
                                </View>

                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{
                            backgroundColor: '#ffa202',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            marginLeft: 50,
                            marginRight: 50,
                            marginTop: 10
                        }} underlayColor="rgba(255,162,2,2)" onPress={this.props.navigation}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                            }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                    }}>Back To Home</Text>
                                </View>

                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

            )
        }

    }
}

export default LoginScreenView = renderLoginScreen()
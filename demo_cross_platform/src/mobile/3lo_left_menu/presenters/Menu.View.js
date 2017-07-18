import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

const Menu = (navigation) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffb434',
            alignContent: 'flex-start',
        }}>
            <View style={{
                //flex: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Image source={require('../../../assets/images/vietbalo/home.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableHighlight
                        onPress={navigation.goToHome}
                        underlayColor="rgba(255,180,52,2)">
                        <Text style={{ color: 'white', fontSize: 13 }}>Home</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                //flex: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Image source={require('../../../assets/images/vietbalo/search_menu.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableHighlight
                        onPress={navigation.goToSearch}
                        underlayColor="rgba(255,180,52,2)">
                        <Text style={{ color: 'white', fontSize: 13 }}>Search</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                //flex: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Image source={require('../../../assets/images/vietbalo/pencil.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableHighlight
                        onPress={navigation.goToPostRoom}
                        underlayColor="rgba(255,180,52,2)">
                        <Text style={{ color: 'white', fontSize: 13 }}>Post</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                //flex: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Image source={require('../../../assets/images/vietbalo/lock.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableHighlight
                        onPress={navigation.goToLogin}
                        underlayColor="rgba(255,180,52,2)">
                        <Text style={{ color: 'white', fontSize: 13 }}>Log In</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default Menu
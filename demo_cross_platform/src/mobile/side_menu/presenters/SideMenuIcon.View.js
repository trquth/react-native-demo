import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image, Alert } from 'react-native';

const SideMenuIcon = (openSideMenu) => {
    const open = () => {
        openSideMenu.onOpenSideMenu.call(this)
    }
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10
        }}>
            <TouchableHighlight
                underlayColor="rgba(255,162,2,2)"
                onPress={open}>
                <Image source={require('../../../assets/images/menu.png')} style={{
                    width: 22, height: 22,
                    resizeMode: 'contain'
                }} />
            </TouchableHighlight>
        </View >
    )
}

export default SideMenuIcon
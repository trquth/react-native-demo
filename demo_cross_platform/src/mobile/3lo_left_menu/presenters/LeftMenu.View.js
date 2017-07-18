import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Menu from './Menu.View';
const { height, width } = Dimensions.get('window');

const LeftMenu = (navigation) => {
    return (
        <View style={{
            flexDirection: 'column',
            flex: 1,
            width: width / 2
        }}>
            <View style={{ flex: 1 }}>
                <Menu {...navigation} />
            </View>
        </View>
    )
}

export default LeftMenu
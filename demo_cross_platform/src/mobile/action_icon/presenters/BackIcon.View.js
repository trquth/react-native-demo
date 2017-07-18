import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';

const BackIcon = (props) => {
    const { navigation } = { ...props }
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
        }}>
            <TouchableHighlight underlayColor="rgba(255,162,2,2)" onPress={navigation}>
                <View style={{
                    flexDirection: 'row', flex: 1,
                    alignItems: 'center',
                    paddingRight: 10
                }} >
                    <Image source={require('../../../assets/images/vietbalo/back.png')} style={{
                        width: 20, height: 20,
                        resizeMode: 'contain'
                    }} />
                </View>
            </TouchableHighlight>
        </View >
    )
}

export default BackIcon
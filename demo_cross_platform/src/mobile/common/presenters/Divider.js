import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
    return (
        <View style={style.divider} />
    )
}

const style = StyleSheet.create({
    divider: {
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#dddddd'
    }
});

export default Divider



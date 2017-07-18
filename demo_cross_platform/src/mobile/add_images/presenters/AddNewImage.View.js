import React, { Component } from 'react';
import {
    ListView, View, TouchableOpacity,
    ScrollView, TouchableHighlight, Image, StyleSheet,
    FlatList, Text
} from 'react-native';
import * as constant from '../../../assets/constant/constant';

const AddNewImage = (props) => {
    let { showLibrary } = { ...props }
    return (
        <TouchableHighlight style={{
            flex: 1,
            backgroundColor: constant.BACKGROUND,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginTop: 3, marginBottom: 3
        }} underlayColor='#ffab1b' onPress={showLibrary}>
            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                alignContent: 'center', alignItems: 'center'
            }}>
                <Image style={{ height: 22, width: 22, margin: 10, }}
                    source={require('../../../assets/images/vietbalo/picture.png')} />
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                }}>Add Picture</Text>
            </View>
        </TouchableHighlight>
    );
}

export default AddNewImage


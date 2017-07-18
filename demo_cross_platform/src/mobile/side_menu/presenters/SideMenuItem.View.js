import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class SideMenuItem extends Component {
    render() {
        return <TouchableOpacity
            onPress={this.props.onPress}>
            <Image />
            <View style={{ backgroundColor: 'blue' }}>
                <Text>SIDE MENU</Text>
            </View>
        </TouchableOpacity>
    }
}
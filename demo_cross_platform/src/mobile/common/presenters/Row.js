/**
 * Created by sts on 10/10/16.
 */
import React, { Component } from 'react';
import { View as RNView, StyleSheet } from 'react-native';

export default class Row extends Component {

    renderChildren(props) {
        return React.Children.map(props.children, child => {
            return child
        })
    }

    render() {
        let centerRow = null;
        if (this.props.styleName == 'center')
            centerRow = { justifyContent: 'center' };

        return (
            <RNView {...this.props} style={[style.row, this.props.style, centerRow]} >
                {this.renderChildren(this.props)}
            </RNView>
        );
    }
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#ffffff'
    },
    icon: {
        opacity: 0.5,
        marginRight: -7,
        marginLeft: 4
    }
});
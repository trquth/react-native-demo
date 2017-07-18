import React, { Component } from 'react';
import {
    ListView, View, TouchableOpacity, ScrollView,
    requireNativeComponent, Image, StyleSheet, Text
} from 'react-native';
import Utils from './../../../ultilities/Utils';
import Divider from './Divider';
import Row from './Row';

class ListItemView extends Component {
    render() {
        const { index, name, selected, selectedRow } = { ...this.props }
        return (
            <View>
                <TouchableOpacity onPress={selected}>
                    <View >
                        <Row>
                            <View style={styles.indexContainer}>
                                <View style={selectedRow ? styles.indexBorderSelected : styles.indexBorder}>
                                    <Text>
                                        {parseInt(index) + 1}
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.itemDesContainer}>
                                <Text numberOfLines={1}
                                    style={selectedRow ? styles.itemDesTextSelected : styles.itemDesText}>
                                    {name}
                                </Text>

                            </View>
                            <View style={styles.iconContainer}>
                                {this.props.children}
                            </View>
                        </Row>
                        <Divider />
                    </View>
                </TouchableOpacity>
            </View>)
    }
}

export const styles = StyleSheet.create({
    container: {
        height: 71,
        borderBottomWidth: 1,
        borderColor: '#DCDCDB'
    },
    indexContainer: {
        flex: 1,
        paddingRight: 10
    },
    indexBorder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Utils.isIOS() ? 34 : 40,
        width: Utils.isIOS() ? 34 : 40,
        //borderRadius:Utils.isIOS() ? 17: 20,
        //borderWidth: 2,
        //borderColor: '#DCDCDB',
    },
    indexBorderSelected: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Utils.isIOS() ? 34 : 40,
        width: Utils.isIOS() ? 34 : 40,
        borderRadius: Utils.isIOS() ? 17 : 20,
        borderWidth: 2,
        borderColor: '#F37F30',
    },
    indexText: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#DCDCDB',
        textAlign: 'center',
        textAlignVertical: 'top',
        lineHeight: 40
    },
    indexTextSelected: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#F37F30',
        textAlign: 'center',
        lineHeight: 40
    },
    itemDesContainer: {
        flex: 4
    },
    itemDesText: {
        color: '#000',
        fontWeight: 'bold'
    },
    itemDesTextSelected: {
        color: '#F37F30',
        fontWeight: 'bold'
    },
    itemSubtitleText: {
        color: '#7C7C7C',
        fontSize: 13
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    image: {
        height: 10,
        width: 10,

    }
})

export default ListItemView
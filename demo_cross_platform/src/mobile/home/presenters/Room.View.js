import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

const renderRoom = () => {
    return class extends Component {
        constructor() {
            super()
            const widthFrame = width;
        }

        render() {
            const { title, maxSalePrice, imageUrl, categoryName } = this.props.room;
            return (
                <TouchableHighlight underlayColor="rgba(244,244,244,2)" onPress={this.props.navigation}>
                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        margin: 7,
                        borderRadius: 6, borderWidth: 0.5,
                        borderColor: 'gray',
                        borderStyle: 'solid',
                        width: width - 20,
                        height: width / 2,
                        shadowRadius: 2,
                        shadowOpacity: 0.5,
                    }}>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                flex: 1, padding: 5
                            }}>
                                <View style={{
                                    flex: 2,
                                    position: 'relative'
                                }}>
                                    <Image source={{ uri: imageUrl }} style={{
                                        resizeMode: 'contain',
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        right: 0,
                                        left: 0
                                    }} />
                                </View>
                                <View style={{ flex: 4, paddingLeft: 10 }}>
                                    <View style={{ flex: 1, alignContent: 'flex-start' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#40da40" }}>{categoryName}</Text>
                                        <View style={{
                                            flex: 1, flexDirection: 'row',
                                            justifyContent: 'center', marginTop: 10,
                                            position: 'relative'
                                        }}>
                                            <View style={{
                                                flex: 0.5, alignItems: 'center',
                                            }}>
                                                <Image style={{
                                                    height: 18, width: 12,
                                                    flex: 1,
                                                    position: 'absolute',
                                                }}
                                                    source={require('../../../assets/images/vietbalo/location.png')} />
                                            </View>
                                            <View style={{ flex: 4 }}>
                                                <Text style={{ fontSize: 12, flex: 4, fontWeight: 'bold', color: '#9aacb5' }}
                                                    numberOfLines={2}>{title}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 3, paddingTop: 10 }}>
                                            <Text style={{ fontSize: 12, color: '#9aacb5' }}
                                                numberOfLines={4}>{title}</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>

                        </View>

                    </View >
                </TouchableHighlight>
            )
        }
    }
}

const RoomView = renderRoom();
export default RoomView;
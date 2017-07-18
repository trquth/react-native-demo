import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, Dimensions, Image,
    ScrollView
} from 'react-native';
import PhotoSliderView from './PhotoSlider.View';
import LocationMapView from './LocationMap.View';
import * as constant from '../../../assets/constant/constant';
const { height, width } = Dimensions.get('window');

const renderRoomDetail = (RoomImage, RoomDetail, Map) => {
    return class extends Component {
        render() {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    margin: 10,
                    borderRadius: 6, borderWidth: 0.5,
                    borderColor: 'gray',
                    borderStyle: 'solid',
                    shadowRadius: 2,
                    shadowOpacity: 0.5,
                }}>
                    <ScrollView>
                        <View style={{
                            flex: 3,
                            flexDirection: 'row',
                            padding: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            //position: 'relative'
                        }}>
                            <View style={{
                                // position: 'absolute',
                            }}>
                                <RoomImage />
                            </View>
                        </View>
                        <View style={{ flex: 5, marginTop: 10 }}>
                            <RoomDetail {...this.props} />
                        </View>

                        <View style={{
                            flex: 5,
                            flexDirection: 'column', padding: 10,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <View style={{ flex: 3 }}>
                                {/*<Map />*/}
                            </View>
                        </View>
                    </ScrollView>
                </View >
            )
        }

    }
}

const RoomDetailView = (props) => {
    const { goToLogin } = { ...props }
    const widthFrame = width;
    // const { imageUrl, title, maxSalePrice } = product.product;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#40da40" }}>Lorem Ipsum</Text>
                    <View style={{
                        flex: 0.5, flexDirection: 'row',
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
                                numberOfLines={2}>`as opposed to using 'Content here, content here',
                         making it look like readable English.`</Text>
                        </View>
                    </View>
                    <ScrollView style={{ marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ color: '#9aacb5' }}>`It is a long established fact that
                         a reader will be distracted by the readable content of a page
                         when looking at its layout. The point of using
                         Lorem Ipsum is that it has a more-or-less normal
                         distribution of letters, as opposed to using 'Content here, content here',
                         making it look like readable English. Many desktop publishing packages and
                         web page editors now use Lorem Ipsum as their default model text,
                         and a search for 'lorem ipsum' will uncover many web sites still in
                          their infancy. Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected humour and the like)`.</Text>
                    </ScrollView>
                </View>
            </View>
            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight style={{
                        flex: 1,
                        backgroundColor: constant.BACKGROUND,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        marginLeft: 10,
                        marginRight: 10
                    }} onPress={goToLogin}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center'
                        }}>
                            <Image style={{ height: 20, width: 20, margin: 10, }}
                                source={require('../../../assets/images/vietbalo/tag.png')} />
                            <Text style={{
                                color: 'white',
                                fontSize: 17,
                            }}>Booking</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight style={{
                        flex: 1,
                        backgroundColor: constant.BACKGROUND,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        marginLeft: 10,
                        marginRight: 10
                    }} onPress={goToLogin}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center'
                        }}>
                            <Image style={{ height: 20, width: 20, margin: 10, }}
                                source={require('../../../assets/images/vietbalo/chat.png')} />
                            <Text style={{
                                color: 'white',
                                fontSize: 17,
                            }}>Chatting</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const renderMap = (Map) => {
    return class extends Component {
        render() {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    margin: 10,
                    borderRadius: 6, borderWidth: 0.5,
                    borderColor: 'gray',
                    borderStyle: 'solid',
                    shadowRadius: 2,
                    shadowOpacity: 0.5,
                    position: 'relative'
                }}>
                    <Map />
                </View >
            )
        }

    }
}

export default RoomDetailView = renderRoomDetail(PhotoSliderView, RoomDetailView, LocationMapView)
//export default RoomDetailView = renderMap(LocationMapView)
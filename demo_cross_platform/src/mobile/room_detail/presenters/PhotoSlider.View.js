import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

const PhotoSliderView = () => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        }}>
            <Swiper style={{
                position: 'relative'
            }} height={150}
                autoplay={true}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={<View style={{
                    backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3,
                }} />}
                activeDot={<View style={{
                    backgroundColor: '#000', width: 8, height: 8,
                    borderRadius: 4, marginLeft: 3, marginRight: 3,
                }} />}
                paginationStyle={{
                    position:'absolute',
                    bottom: 5,
                    justifyContent: 'center', alignContent: 'flex-end',
                    alignItems: 'flex-end'
                }} loop>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../../../assets/images/slider/1.jpg')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../../../assets/images/slider/2.jpg')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../../../assets/images/slider/3.jpg')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../../../assets/images/slider/4.jpg')} />
                </View>
            </Swiper>
        </View>
    )
}

export default PhotoSliderView

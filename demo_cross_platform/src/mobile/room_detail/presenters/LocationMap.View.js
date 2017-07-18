import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
};
const LocationMapView = () => {
    return (
        <View style={{
            flex: 1, justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray',
            width: 100
        }}>

            <MapView
                //provider={MapView.PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default LocationMapView

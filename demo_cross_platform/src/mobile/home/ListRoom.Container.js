import React, { Component } from 'react';
import {
    ScrollView, View, Text, Button, TouchableOpacity
    , FlatList
} from 'react-native';
import RoomView from './../home/presenters/Room.View';

const showListRoom = (Room) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.roomDetail = this.roomDetail.bind(this);
        }
        roomDetail(product) {
            this.props.navigation.navigate("RoomDetailScreen", { ...product })
        }

        _keyExtractor = (item, index) => index;

        _renderItem = ({ item }) => (
            <RoomView room={item}
                navigation={() => this.roomDetail(item)} />
        );

        render() {
            return (
                <ScrollView style={{
                    flexDirection: 'column',
                    flex: 5
                }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <FlatList
                            data={this.props.rooms}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    </View>
                </ScrollView>
            );
        }
    }
}

export default ListRoom = showListRoom(RoomView);
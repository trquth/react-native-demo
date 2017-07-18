import React, { Component } from 'react';
import {
    ScrollView, View, Text, Button, TouchableOpacity
    , FlatList, Image
} from 'react-native';

const renderSelectedImages = () => {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        _keyExtractor = (item, index) => index;

        _renderItem = ({ item }) => {
            console.log('abafasfs', item.id, this.props.removeImage)
            return (
                <View style={{
                    flex: 1, margin: 2, position: 'relative',
                    zIndex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'black'
                }}>
                    <View style={{ position: 'absolute', right: 0, top: 0, zIndex: 2 }}>
                        <TouchableOpacity onPress={() => this.props.removeImage(item.id)}>
                            <View style={{}}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../../assets/images/cancel.png')} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <Image
                        style={{ width: 60, height: 60 }}
                        source={{ uri: item.uri }}
                    />
                </View>)
        };

        render() {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                    <FlatList
                        data={this.props.selectedImages}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        horizontal={true}
                    />
                </View>
            );
        }
    }
}

export default ShowSelectedImages = renderSelectedImages();
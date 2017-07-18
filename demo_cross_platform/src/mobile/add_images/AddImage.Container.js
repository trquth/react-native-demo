import React, { Component } from 'react';
import {
    ListView, View, TouchableOpacity,
    ScrollView, requireNativeComponent, Image, StyleSheet,
    FlatList, Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var ImagePicker = require('react-native-image-picker');
import AddNewImage from './presenters/AddNewImage.View';
import ShowSelectedImages from './presenters/ShowSelectedImages.View';
import { selectImage, removeImageById } from './AddImage.Action'
var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const renderAddImage = (AddNewImage, ShowSelectedImages) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.showLibrary = this.showLibrary.bind(this);
            this.removeImage = this.removeImage.bind(this);
        }

        showLibrary() {
            ImagePicker.showImagePicker(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else {
                    let source = { id: new Date().valueOf(), uri: response.uri };
                    if (source) {
                        this.props.selectImage(source)
                    }
                }
            });
        }

        removeImage(id) {
            this.props.removeImageById(id);
        }

        render() {
            return (
                <View style={{
                    flex: 1
                }}>
                    <AddNewImage showLibrary={this.showLibrary} />
                    <ShowSelectedImages selectedImages={this.props.selectedImages} removeImage={this.removeImage} />
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedImages: state.addImage.listSelectedImages
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectImage,
        removeImageById
    }, dispatch);
}

export default AddImage = connect(mapStateToProps, mapDispatchToProps)(renderAddImage(AddNewImage, ShowSelectedImages));


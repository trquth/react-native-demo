import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, Dimensions, Image,
    ScrollView, TextInput, KeyboardAvoidingView, Animated, Keyboard,
    StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker';
const { height, width } = Dimensions.get('window');
import Utils from '../../../ultilities/Utils';
import * as constant from '../../../assets/constant/constant';
import { CountryPopUp, CityPopUp } from '../../location/LocationPopup.Container';
import AddImage from '../../add_images/AddImage.Container';

const renderPostRoomView = (Country, City, AddImage) => {
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
                    <View style={{ flex: 8, marginTop: 10, marginBottom: 10 }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image style={{ height: 19, width: 22, margin: 10 }}
                                    source={require('../../../assets/images/vietbalo/pencil_black.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Title</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10
                            }}>
                                <TextInput
                                    style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={() => { }}
                                    //multiline={true}
                                    value={''}
                                    placeholder="Title"
                                />
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image style={{ height: 19, width: 22, margin: 10 }}
                                    source={require('../../../assets/images/vietbalo/dollar_black.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Cost</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10
                            }}>
                                <TextInput
                                    style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={() => { }}
                                    //multiline={true}
                                    value={''}
                                    placeholder="Cost"
                                />
                            </View>
                        </View>
                        <View style={{
                            flex: 2,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1,
                                //justifyContent: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image style={{ height: 19, width: 22, margin: 10 }}
                                    source={require('../../../assets/images/vietbalo/pencil_black.png')} />
                                <Text style={{ fontWeight: 'bold' }}>{`Short
                                 Description`}</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10
                            }}>
                                <TextInput
                                    style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={() => { }}
                                    value={''}
                                    //multiline={true}
                                    placeholder="Short description" />
                            </View>
                        </View>
                        <View style={{
                            flex: 4,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image style={{ height: 20, width: 20, margin: 10 }}
                                    source={require('../../../assets/images/vietbalo/pencil_black.png')} />
                                <Text style={{ fontWeight: 'bold' }}>{`Long
                                 description`}</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10
                            }}>
                                <TextInput
                                    style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={() => { }}
                                    value={''}
                                    editable={true}
                                    //multiline={true}
                                    placeholder="Long description" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                    </View>
                    <View style={{
                        flex: 1, flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight style={{
                                flex: 1,
                                backgroundColor: constant.BACKGROUND,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 40,
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'center',
                                    alignContent: 'center', alignItems: 'center'
                                }}>
                                    <Image style={{ height: 22, width: 22, margin: 10, }}
                                        source={require('../../../assets/images/vietbalo/send.png')} />
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20,
                                    }}>Post</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View >
            )
        }

    }
}

//Update UI Post Your Room
const renderNewPostRoomView = (Country, City, Map) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.keyboardHeight = new Animated.Value(0);
            this.keyboardHeightMargin = new Animated.Value(10);
        }

        componentWillMount() {
            if (Utils.isIOS()) {
                this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
                this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
            } else {
                this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
                this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
            }
        }

        componentWillUnmount() {
            this.keyboardWillShowSub.remove();
            this.keyboardWillHideSub.remove();
        }
        //IOS
        keyboardWillShow = (event) => {
            return (
                Animated.parallel([
                    Animated.timing(this.keyboardHeight, {
                        duration: event.duration,
                        toValue: event.endCoordinates.height,
                    }),
                ]).start(),
                Animated.parallel([
                    Animated.timing(this.keyboardHeightMargin, {
                        duration: event.duration,
                        toValue: - (50),
                    }),
                ]).start()
            )
        };

        keyboardWillHide = (event) => {
            return (Animated.parallel([
                Animated.timing(this.keyboardHeight, {
                    duration: event.duration,
                    toValue: 0,
                })
            ]).start(),
                Animated.parallel([
                    Animated.timing(this.keyboardHeightMargin, {
                        duration: event.duration,
                        toValue: 10,
                    })
                ]).start()
            )
        };
        //Android
        keyboardDidShow = (event) => {
            return (
                Animated.parallel([
                    Animated.timing(this.keyboardHeight, {
                        duration: event.duration,
                        toValue: event.endCoordinates.height,
                    }),
                ]).start(),
                Animated.parallel([
                    Animated.timing(this.keyboardHeightMargin, {
                        duration: event.duration,
                        toValue: - (50),
                    }),
                ]).start()
            )
        }

        keyboardDidHide = (event) => {
            return (Animated.parallel([
                Animated.timing(this.keyboardHeight, {
                    //duration: event.duration,
                    toValue: 0,
                })
            ]).start(),
                Animated.parallel([
                    Animated.timing(this.keyboardHeightMargin, {
                        //duration: event.duration,
                        toValue: 10,
                    })
                ]).start()
            )
        }

        render() {
            const { showCountryPopUp, showCityPopUp,
                selectCountry, selectedCountry, selectCity, selectedCity,
                selectDate, selectedDate, changeInputTitleField,
                changeInputAddressField, changeInputShortDescriptionField,
                changeInputLongDescriptionField,
                changeInputStartDateField, changeInputEndDateField, inputData } = { ...this.props }
            return (
                <Animated.View style={Utils.isIOS ? [style.contain, {
                    //  marginTop: this.keyboardHeightMargin,
                    // paddingBottom: this.keyboardHeight
                }] : [style.contain, {
                    // marginTop: this.keyboardHeightMargin,
                    //backgroundColor:'blue'
                }]}>
                    <ScrollView>
                        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
                            <View style={{ flex: 1, marginBottom: 10 }}>
                                <Country visible={this.props.countryVisible}
                                    title={'Country List'}
                                    onPress={this.hiddenCountryModal}
                                    selected={selectCountry}
                                    selectedCountry={selectedCountry} />
                                <City visible={this.props.cityVisible}
                                    title={'City List'}
                                    onPress={this.hiddenCityModal}
                                    selected={selectCity}
                                    selectedCity={selectedCity}
                                />
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    margin: 10
                                }}>
                                    <View style={{
                                        height: 40, flexDirection: 'row', justifyContent: 'center',
                                        alignItems: 'center', marginBottom: 3
                                    }}>
                                        <View style={{
                                            flex: 1, borderColor: 'gray'
                                            , borderWidth: 1,
                                            marginRight: 3
                                        }}>
                                            <TouchableHighlight style={{
                                                height: 40,
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }} underlayColor="rgba(255,255,255,2)" onPress={showCountryPopUp}>
                                                <Text style={{
                                                    color: '#515d63',
                                                    fontSize: 15,
                                                    marginLeft: 10
                                                }}>{selectedCountry.country_name || 'Country'}</Text>
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{
                                            flex: 1, borderColor: 'gray', borderWidth: 1,
                                            justifyContent: 'center', marginLeft: 3
                                        }}>
                                            <TouchableHighlight style={{
                                                height: 40,
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }} underlayColor="rgba(255,255,255,2)" onPress={showCityPopUp}>
                                                <Text style={{
                                                    color: '#515d63',
                                                    fontSize: 15,
                                                    marginLeft: 10
                                                }}>{selectedCity.city_name || 'City'}</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                    <TextInput
                                        style={{
                                            height: 40, borderColor: 'gray',
                                            borderWidth: 1, marginTop: 3, marginBottom: 3
                                        }}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        onChangeText={changeInputTitleField}
                                        //multiline={true}
                                        value={inputData && inputData.title ? inputData.title : ''}
                                        placeholder="Title"
                                    />
                                    <TextInput
                                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 3, marginBottom: 3 }}
                                        onChangeText={changeInputAddressField}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        //multiline={true}
                                        value={inputData && inputData.address ? inputData.address : ''}
                                        placeholder="Address"
                                    />
                                    <View style={{
                                        flex: 1, flexDirection: 'row',
                                        height: 40
                                    }}>
                                        <View style={{ flex: 1 }} >
                                            <TextInput
                                                style={{
                                                    flex: 1, borderColor: 'gray', borderWidth: 1, marginRight: 3
                                                }}
                                                underlineColorAndroid='rgba(0,0,0,0)'
                                                //multiline={true}
                                                value={inputData && inputData.startDate ? inputData.startDate : ''}
                                                placeholder="Start Date"
                                            />
                                            <DatePicker
                                                style={{ position: 'absolute' }}
                                                date={new Date()}
                                                mode="date"
                                                format='LL'
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                showIcon={true}
                                                onDateChange={changeInputStartDateField}
                                                customStyles={styleDatePicker}
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                style={{ flex: 1, borderColor: 'gray', borderWidth: 1, marginLeft: 3 }}
                                                underlineColorAndroid='rgba(0,0,0,0)'
                                                //multiline={true}
                                                value={inputData && inputData.endDate ? inputData.endDate : ''}
                                                placeholder="End Date"
                                            />
                                            <DatePicker
                                                style={{ position: 'absolute' }}
                                                date={new Date()}
                                                mode="date"
                                                format='LL'
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                showIcon={true}
                                                onDateChange={changeInputEndDateField}
                                                customStyles={styleDatePicker}
                                            />
                                        </View>
                                    </View>
                                    <TextInput
                                        style={{ height: 60, borderColor: 'gray', borderWidth: 1, marginTop: 3, marginBottom: 3 }}
                                        onChangeText={changeInputShortDescriptionField}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        value={inputData && inputData.shortDescription ? inputData.shortDescription : ''}
                                        //multiline={true}
                                        placeholder="Short description" />

                                    <TextInput
                                        style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginTop: 3, marginBottom: 3 }}
                                        onChangeText={changeInputLongDescriptionField}
                                        value={inputData && inputData.longDescription ? inputData.longDescription : ''}
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        //multiline={true}
                                        placeholder="Long description" />
                                    {/*<TouchableHighlight style={{
                                        //flex: 1,
                                        backgroundColor: constant.BACKGROUND,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                        marginTop: 3, marginBottom: 3
                                    }}>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'center',
                                            alignContent: 'center', alignItems: 'center'
                                        }}>
                                            <Image style={{ height: 22, width: 22, margin: 10, }}
                                                source={require('../../../assets/images/vietbalo/picture.png')} />
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                            }}>Add Picture</Text>
                                        </View>
                                    </TouchableHighlight>*/}
                                    <AddImage />
                                </View>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}>
                                    <TouchableHighlight style={{
                                        flex: 1,
                                        height: 40,
                                        backgroundColor: constant.BACKGROUND,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'center',
                                            alignContent: 'center', alignItems: 'center'
                                        }}>
                                            <Image style={{ height: 22, width: 22, margin: 10, }}
                                                source={require('../../../assets/images/vietbalo/send.png')} />
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                            }}>Post</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </Animated.View >
            )
        }

    }
}

const style = StyleSheet.create({
    contain: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderStyle: 'solid',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        position: 'relative',
    },
    dateInput: {
        width: 0,
        height: 0,
        borderWidth: 0
    },
    dateText: {
        width: 0,
        height: 0
    },
    dateIcon: {
        height: 15,
        width: 100,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
        borderRadius: 0,
        opacity: 0,
        zIndex: 2
    }
});

const styleDatePicker =
    {
        dateInput: {
            width: 0,
            height: 0,
            borderWidth: 0
        },
        dateText: {
            width: 0,
            height: 0
        },
        dateIcon: {
            height: 15,
            width: 100,
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            borderRadius: 0,
            opacity: 0,
            zIndex: 2
        }
    }

export default PostRoomView = renderNewPostRoomView(CountryPopUp, CityPopUp, AddImage)
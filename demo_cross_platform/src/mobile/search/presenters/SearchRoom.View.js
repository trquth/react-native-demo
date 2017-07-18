import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, Dimensions, Image,
    ScrollView, TouchableOpacity, TextInput, StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { CountryPopUp, CityPopUp } from '../../location/LocationPopup.Container';
import * as constant from '../../../assets/constant/constant';
const { height, width } = Dimensions.get('window');

//Update new UI
const renderNewSearchRoomView = (Country, City) => {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            const { showCountryPopUp, showCityPopUp,
                selectCountry, selectedCountry, selectCity, selectedCity,
                changeInputStartDateField, changeInputEndDateField, inputData } = { ...this.props }
            return (
                <View style={styles.contain}>
                    <Image resizeMode="stretch"
                        source={require('../../../assets/images/vietbalo/background.png')} />
                    <View style={{
                        flex: 1, position: 'absolute'
                        , top: 0, bottom: 0, right: 0, left: 0,
                        justifyContent: 'center',
                        marginLeft: 50,
                        marginRight: 50,
                    }}>
                        <View style={{ flex: 1 }}>
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
                        </View>
                        <View style={{
                            flex: 1,
                        }}>
                            <TouchableHighlight style={{
                                backgroundColor: '#ffff',
                                height: 40,
                                marginBottom: 0.5
                            }} underlayColor="rgba(255,255,255,2)" onPress={showCountryPopUp}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        color: '#515d63',
                                        fontSize: 15,
                                        marginLeft: 10
                                    }}>{selectedCountry.country_name || 'Country'}</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{
                                backgroundColor: '#ffff',
                                height: 40,
                                marginBottom: 0.5
                            }} underlayColor="rgba(255,255,255,2)" onPress={showCityPopUp}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        color: '#515d63',
                                        fontSize: 15,
                                        marginLeft: 10
                                    }}>{selectedCity.city_name || 'City'}</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{
                                backgroundColor: '#ffff',
                                height: 40,
                                marginBottom: 0.5
                            }} underlayColor="rgba(255,255,255,2)" onPress={this.props.navigation}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        color: '#515d63',
                                        fontSize: 15,
                                        marginLeft: 10
                                    }}>{inputData.startDate || 'Start Date'}</Text>
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
                            </TouchableHighlight>
                            <TouchableHighlight style={{
                                backgroundColor: '#ffff',
                                height: 40,
                                marginBottom: 0.5
                            }} underlayColor="rgba(255,255,255,2)" onPress={this.props.navigation}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        color: '#515d63',
                                        fontSize: 15,
                                        marginLeft: 10
                                    }}>{inputData.endDate || 'End Date'}</Text>
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
                            </TouchableHighlight>
                            <TouchableHighlight style={{
                                backgroundColor: '#00cd00',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50,
                                marginBottom: 0.5
                            }} underlayColor="rgba(255,162,2,2)" onPress={() => { }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                }}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={{
                                            color: 'white',
                                            fontSize: 15,
                                        }}>Find Home</Text>
                                    </View>

                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{
                                backgroundColor: '#ffa202',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50,
                                marginTop: 10
                            }} underlayColor="rgba(255,162,2,2)" onPress={this.props.navigation}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                }}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={{
                                            color: 'white',
                                            fontSize: 15,
                                        }}>Post Your Room</Text>
                                    </View>

                                </View>
                            </TouchableHighlight>
                        </View>


                    </View>
                </View>

            )
        }

    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }
})

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


export default SearchRoomView = renderNewSearchRoomView(CountryPopUp, CityPopUp)
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocationPopUpView from './../location/presenters/LocationPopup.View';
import { toggleCountryModal, toggleCityModal } from './LocationPopUp.Action';
import Country from '../country/Country.Container';
import City from '../city/City.Container';

const renderCountryPopUp = (Location) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.showCountryModal = this.showCountryModal.bind(this);
            this.hiddenCountryModal = this.hiddenCountryModal.bind(this);
        }

        showCountryModal() {
            this.props.toggleCountryModal(true)
        }

        hiddenCountryModal() {
            this.props.toggleCountryModal(false)
        }

        render() {
            return (
                <View style={{ flex: 1 }}>
                    <LocationPopUpView visible={this.props.countryVisible} title={"Country List"}
                        showModal={this.showCountryModal} hiddenModal={this.hiddenCountryModal}>
                        <Location selected={this.props.selected} selectedCountry={this.props.selectedCountry} />
                    </LocationPopUpView>
                </View>
            );
        }
    }
}

const renderCityPopUp = (Location) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.showCityModal = this.showCityModal.bind(this);
            this.hiddenCityModal = this.hiddenCityModal.bind(this);
        }

        showCityModal() {
            this.props.toggleCityModal(true)
        }

        hiddenCityModal() {
            this.props.toggleCityModal(false)
        }

        render() {
            return (
                <View style={{ flex: 1 }}>
                    <LocationPopUpView visible={this.props.cityVisible} title={"City List"}
                        showModal={this.showCityModal} hiddenModal={this.hiddenCityModal}>
                        <Location selected={this.props.selected} selectedCity={this.props.selectedCity} />
                    </LocationPopUpView>
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        countryVisible: state.location.countryVisible,
        cityVisible: state.location.cityVisible
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleCountryModal,
        toggleCityModal
    }, dispatch);
}

const CountryPopUp = connect(mapStateToProps, mapDispatchToProps)(renderCountryPopUp(Country));
const CityPopUp = connect(mapStateToProps, mapDispatchToProps)(renderCityPopUp(City));

export {
    CountryPopUp, CityPopUp
}

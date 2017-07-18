import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import PostRoomView from './presenters/PostRoom.View';
import AddRoomIcon from './../action_icon/presenters/AddRoomIcon.View';
import BackIcon from './../action_icon/presenters/BackIcon.View';
import { toggleCountryModal, toggleCityModal } from './../location/LocationPopUp.Action';
import { selectCountry, selectCity, selectDate, changeInputForField } from './PostRoom.Action';

const renderPostRoomInScreen = (MainLayout, PostRoomView, AddIcon, BackIcon) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
            this.goToHomeScreen = this.goToHomeScreen.bind(this);
            this.showCountryModal = this.showCountryModal.bind(this);
            this.showCityModal = this.showCityModal.bind(this);
            this.selectCountry = this.selectCountry.bind(this);
            this.selectCity = this.selectCity.bind(this);
            this.hidenCountryModal = this.hidenCountryModal.bind(this);
            this.hidenCityModal = this.hidenCityModal.bind(this);
            this.changeInputTitleField = this.changeInputTitleField.bind(this);
            this.changeInputAddressField = this.changeInputAddressField.bind(this);
            this.changeInputShortDescriptionField = this.changeInputShortDescriptionField.bind(this);
            this.changeInputLongDescriptionField = this.changeInputLongDescriptionField.bind(this);
            this.changeInputStartDateField = this.changeInputStartDateField.bind(this);
            this.changeInputEndDateField = this.changeInputEndDateField.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({
                onOpenSideMenu: this.onOpenSideMenu,
                goToHomeScreen: this.goToHomeScreen
            });
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        goToHomeScreen() {
            this.props.navigation.navigate("HomeScreen");
        }

        showCountryModal() {
            this.props.toggleCountryModal(true)
        }

        showCityModal() {
            this.props.toggleCityModal(true)
        }

        hidenCountryModal() {
            this.props.toggleCountryModal(false)
        }

        hidenCityModal() {
            this.props.toggleCityModal(false)
        }

        selectCity(data) {
            this.props.selectCity(data);
        }

        selectCountry(data) {
            this.props.selectCountry(data, this.hidenCountryModal);
        }

        selectCity(data) {
            this.props.selectCity(data, this.hidenCityModal);
        }

        changeInputTitleField(text) {
            this.props.changeInputForField(text, 'title')
        }

        changeInputAddressField(text) {
            this.props.changeInputForField(text, 'address')
        }

        changeInputShortDescriptionField(text) {
            this.props.changeInputForField(text, 'shortDescription')
        }

        changeInputLongDescriptionField(text) {
            this.props.changeInputForField(text, 'longDescription')
        }

        changeInputStartDateField(date) {
            let dateObj = new Date(date);
            let convertDate = moment(dateObj).format('DD-MM-YYYY');
            this.props.changeInputForField(convertDate, 'startDate')
        }

        changeInputEndDateField(date) {
            let dateObj = new Date(date);
            let convertDate = moment(dateObj).format('DD-MM-YYYY');
            this.props.changeInputForField(convertDate, 'endDate')
        }

        static navigationOptions = ({ navigation }) => {
            let navParams = { ...navigation }
            return {
                headerTitle: <Text style={{
                    fontFamily: 'HelveticaNeue-Medium',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    fontSize: 20,
                    color: 'white'
                }}>Post New Room</Text>,
                headerLeft: <BackIcon navigation={() => navParams.state.params.goToHomeScreen()} />,
            }
        }

        render() {
            let { selectedCountry, selectedCity, selectedDate, inputData } = this.props
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <PostRoomView
                        showCountryPopUp={this.showCountryModal}
                        showCityPopUp={this.showCityModal}
                        selectCountry={this.selectCountry}
                        selectCity={this.selectCity}
                        selectDate={this.selectDate}
                        navigation={this.goToPostRoomScreen}
                        selectedCountry={selectedCountry}
                        selectedCity={selectedCity}
                        changeInputTitleField={this.changeInputTitleField}
                        changeInputAddressField={this.changeInputAddressField}
                        changeInputShortDescriptionField={this.changeInputShortDescriptionField}
                        changeInputLongDescriptionField={this.changeInputLongDescriptionField}
                        changeInputStartDateField={this.changeInputStartDateField}
                        changeInputEndDateField={this.changeInputEndDateField}
                        inputData={inputData} />
                </MainLayout>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedCountry: state.postRoom.selectedCountry,
        selectedCity: state.postRoom.selectedCity,
        inputData: state.postRoom.inputdata
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleCountryModal,
        toggleCityModal,
        selectCountry,
        selectCity,
        changeInputForField
    }, dispatch);
}

export default PostRoom = connect(mapStateToProps, mapDispatchToProps)(renderPostRoomInScreen(MainLayoutContainer, PostRoomView, AddRoomIcon, BackIcon))
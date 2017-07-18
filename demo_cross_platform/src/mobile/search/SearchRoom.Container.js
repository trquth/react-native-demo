import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import SearchRoomView from './presenters/SearchRoom.View';
import AddRoomIcon from './../action_icon/presenters/AddRoomIcon.View';
import BackIcon from './../action_icon/presenters/BackIcon.View';
import Utils from './../../ultilities/Utils';
import { toggleCountryModal, toggleCityModal } from './../location/LocationPopUp.Action';
import { selectCountry, selectCity, changeInputField } from './SearchRoom.Action';

const renderSearchInScreen = (MainLayout, SearchScreen, AddIcon, BackIcon) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
            this.goToHomeScreen = this.goToHomeScreen.bind(this);
            this.goToPostRoomScreen = this.goToPostRoomScreen.bind(this);
            this.showCountryModal = this.showCountryModal.bind(this);
            this.showCityModal = this.showCityModal.bind(this);
            this.selectCountry = this.selectCountry.bind(this);
            this.selectCity = this.selectCity.bind(this);
            this.changeInputStartDateField = this.changeInputStartDateField.bind(this);
            this.changeInputEndDateField = this.changeInputEndDateField.bind(this);
            this.hidenCountryModal = this.hidenCountryModal.bind(this);
            this.hidenCityModal = this.hidenCityModal.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({
                onOpenSideMenu: this.onOpenSideMenu,
                goToHomeScreen: this.goToHomeScreen,
                goToPostRoomScreen: this.goToPostRoomScreen
            });
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        showCountryModal() {
            this.props.toggleCountryModal(true)
        }

        hidenCountryModal() {
            this.props.toggleCountryModal(false)
        }

        showCityModal() {
            this.props.toggleCityModal(true)
        }

        hidenCityModal() {
            this.props.toggleCityModal(false)
        }

        goToHomeScreen() {
            this.props.navigation.navigate("HomeScreen");
        }

        goToPostRoomScreen() {
            this.props.navigation.navigate("PostRoomScreen");
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

        changeInputStartDateField(date) {
            let dateObj = new Date(date);
            let convertDate = moment(dateObj).format('DD-MM-YYYY');
            this.props.changeInputField(convertDate, 'startDate');
        }

        changeInputEndDateField(date) {
            let dateObj = new Date(date);
            let convertDate = moment(dateObj).format('DD-MM-YYYY');
            this.props.changeInputField(convertDate, 'endDate');
        }

        static navigationOptions = ({ navigation }) => {
            let navParams = { ...navigation }
            return {
                title: <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Search</Text>,
                headerLeft: <BackIcon navigation={() => navParams.state.params.goToHomeScreen()} />,
                headerRight: <View style={{
                    flexDirection: 'row', flex: 1,
                }}>
                    <AddIcon navigation={() => navParams.state.params.goToPostRoomScreen()} />
                </View>,
            }
        }

        render() {
            let { selectedCountry, selectedCity, inputData } = this.props
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <SearchScreen
                        showCountryPopUp={this.showCountryModal}
                        showCityPopUp={this.showCityModal}
                        selectCountry={this.selectCountry}
                        selectCity={this.selectCity}
                        selectDate={this.selectDate}
                        navigation={this.goToPostRoomScreen}
                        selectedCountry={selectedCountry}
                        selectedCity={selectedCity}
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
        selectedCountry: state.searchRoom.selectedCountry,
        selectedCity: state.searchRoom.selectedCity,
        inputData: state.searchRoom.inputdata
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleCountryModal,
        toggleCityModal,
        selectCountry,
        selectCity,
        changeInputField
    }, dispatch);
}


export default SearchRoom = connect(mapStateToProps, mapDispatchToProps)(renderSearchInScreen(MainLayoutContainer,
    SearchRoomView, AddRoomIcon, BackIcon))
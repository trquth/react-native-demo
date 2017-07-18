import React, { Component } from 'react';
import {
    ListView, View, TouchableOpacity,
    ScrollView, requireNativeComponent, Image, StyleSheet,
    FlatList, Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItemView from '../common/presenters/ListItems.View';
import { initializeApp } from './../city/City.Action';

const renderCityList = (Row) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.selectCityRow = this.selectCityRow.bind(this);
        }

        componentDidMount() {
            this.props.initializeApp();
        }

        _keyExtractor = (item, index) => index;

        _renderItem = (data) => {
            const { item, index } = { ...data }
            let checkImage = <View />;
            let selectedRow = item.id.toString() === this.props.selectedCity.id.toString();
            if (selectedRow) {
                checkImage =
                    <Image style={styles.image} source={require('../../assets/images/vietbalo/right-arrow-selected.png')} />;

            } else {
                checkImage = <Image style={styles.image} source={require('../../assets/images/vietbalo/right-arrow.png')} />;
            }
            return (
                <Row name={item.city_name} index={index}
                    selected={() => this.selectCityRow(item)}
                    selectedRow={selectedRow}>
                    {checkImage}
                </Row>
            );
        }

        selectCityRow(item) {
            this.props.selected(item)
        }

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
                            data={this.props.cities}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    </View>
                </ScrollView>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        cities: state.city.cities,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeApp
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {
        height: 71,
        borderBottomWidth: 1,
        borderColor: '#DCDCDB'
    },
    indexContainer: {
        flex: 1,
        paddingRight: 10
    },
    indexBorder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        width: 34,
        //borderRadius:Utils.isIOS() ? 17: 20,
        //borderWidth: 2,
        //borderColor: '#DCDCDB',
    },
    indexBorderSelected: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        width: 34,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#F37F30',
    },
    indexText: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#DCDCDB',
        textAlign: 'center',
        textAlignVertical: 'top',
        lineHeight: 40
    },
    indexTextSelected: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#F37F30',
        textAlign: 'center',
        lineHeight: 40
    },
    itemDesContainer: {
        flex: 4
    },
    itemDesText: {
        color: '#000',
        fontWeight: 'bold'
    },
    itemDesTextSelected: {
        color: '#F37F30',
        fontWeight: 'bold'
    },
    itemSubtitleText: {
        color: '#7C7C7C',
        fontSize: 13
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    image: {
        height: 10,
        width: 10,

    }
})

export default City = connect(mapStateToProps, mapDispatchToProps)(renderCityList(ListItemView))


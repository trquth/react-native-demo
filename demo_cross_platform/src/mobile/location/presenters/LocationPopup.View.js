import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, Dimensions, Image,
    Modal, TouchableOpacity, StyleSheet
} from 'react-native';
import * as constant from '../../../assets/constant/constant';

const renderLocationPopupView = (Location) => {
    return class extends Component {
        render() {
            const { visible, title, showModal, hiddenModal } = { ...this.props }
            return (
                <View style={{
                    flex: 1
                }}>
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={visible}
                        onRequestClose={() => {
                        }}
                    >
                        <View style={[styles.modalContainer, { flex: 1 }]}>

                            <View style={styles.header}>
                                <Text style={styles.headerText}>
                                    {title}
                                </Text>
                                <TouchableOpacity onPress={hiddenModal}>
                                    <View style={styles.closeContainer}>
                                        <Image style={styles.closeIcon} source={require('../../../assets/images/cancel.png')} />
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.container}>
                                {this.props.children}
                            </View>

                        </View>
                    </Modal>
                </View >
            )
        }
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    header: {
        flex: 1,
        backgroundColor: constant.BACKGROUND,
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    headerText: {
        flex: 3,
        color: '#fff',
    },
    closeContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10
    },
    closeIcon: {
        width: 30,
        height: 30
    },
    container: {
        flex: 8,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
})

export default LocationPopUpView = renderLocationPopupView()
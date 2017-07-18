import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LeftMenu from './presenters/LeftMenu.View';
import { NavigationActions } from 'react-navigation'

const renderSideMenu = (Menu) => {
    return class extends Component {
        constructor() {
            super()
        }

        render() {
            return (
                <Menu {...this.props} />
            );
        }
    }
}



export default MenuContainer = renderSideMenu(LeftMenu)
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './bootstrap/store';
import { createStore } from 'redux';
import Navigation from './mobile/navigation_configuration/Navigation.Container';
import { NavigationWithoutRedux } from './mobile/navigation_configuration/NavigationConfiguration';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}
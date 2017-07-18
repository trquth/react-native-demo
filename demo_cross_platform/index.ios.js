import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App';
//import App from './src/3rdreactnavigation/App';


export default class demo_cross_platform extends Component {
  store = createStore(AppReducer);
  render() {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('demo_cross_platform', () => App);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from "./src/App";

export default class demo_cross_platform extends Component {
  render() {
    return (
      <View>
        <Text>Coming soon..</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('demo_cross_platform', () => App);

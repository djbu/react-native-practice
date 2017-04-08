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
  TextInput,
  Image,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';



export default class AwesomeProject extends Component {
   // Initialize the hardcoded data
 _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <Text>Button</Text>
      </TouchableHighlight>
    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

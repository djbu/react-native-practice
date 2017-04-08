/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import { FadeInView as FadeInView }  from './archivos/FadeInView.js';

export default class AwesomeProject extends Component {
   // Initialize the hardcoded data
  render() {
    return (
      <FadeInView style={{width: 100, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 10, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

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
async getMoviesFromApi() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      this.setState({
        texto: responseJson.movies.map((data)=>(<Text>{data.title}</Text>))
      })

      return;
    } catch(error) {
      console.error('There is an error: ' + error);
    }
  }
 
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds,
      texto: null
  }
}

componentWillMount() {
  this.getMoviesFromApi();
}



  render() {
    return (
      <View style={styles.container}>
                
                <TouchableHighlight  style={styles.button}>
                    <Text>{this.state.texto}</Text>
                </TouchableHighlight>
            </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

import React, { Component } from 'react';
import {
  Animated
} from 'react-native';


export class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // Initial value for opacity: 0
    };
  }
  componentDidMount() {
    Animated.sequence([   
      Animated.timing(
        this.state.fadeAnim,                      // The animated value to drive
        {
          toValue: 1,       
          duration: 1000,
          // Animate to opacity: 1, or fully opaque
        }
      )                         // Animate over time
      ,
      Animated.timing(
        this.state.fadeAnim,                      // The animated value to drive
        {
          toValue: 0,       
          duration: 1000,
          // Animate to opacity: 1, or fully opaque
        }
      ),
      Animated.timing(
        this.state.fadeAnim,                      // The animated value to drive
        {
          toValue: 1,       
          duration: 1000,
          // Animate to opacity: 1, or fully opaque
        }
      ),
      Animated.timing(
        this.state.fadeAnim,                      // The animated value to drive
        {
          toValue: 0,       
          duration: 1000,
          // Animate to opacity: 1, or fully opaque
        }
      ),
      Animated.timing(
        this.state.fadeAnim,                      // The animated value to drive
        {
          toValue: 1,       
          duration: 1000,
          // Animate to opacity: 1, or fully opaque
        }
      )]
    );                              // Starts the animation
  }
  render() {
    return (
      <Animated.View                            // Special animatable View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


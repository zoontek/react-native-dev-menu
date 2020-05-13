// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

if (__DEV__) {
  const DevMenu = require('react-native-dev-menu');
  DevMenu.addItem('Say Hello', () => alert('Hello!'));
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Please open the developer menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

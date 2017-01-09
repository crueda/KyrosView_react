/**
 * Kyros React Native App
 * 
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Login = require('./src/components/loginView')
const Notification = require('./src/components/notificationView')

export default class KyrosView_react extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login></Login>
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
  }
});

AppRegistry.registerComponent('KyrosView_react', () => KyrosView_react);

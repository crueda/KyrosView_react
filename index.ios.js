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
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index) {
    if(index == 0){
      return null;
    }
    return(
      <TouchableHighlight onPress={() => {
        if(index > 0){
          navigator.pop();
        }
      }}>

      <Text style={{marginTop:10, marginLeft: 20, color: '#007AFF'}}>Atras</Text>
      </TouchableHighlight>
    )
  },

  RightButton: function(route, navigator, index) {
    return null;
  },
  Title: function(route, navigator, index) {
        if(route.name == 'Login'){
      return null;
    }

    return (
      <Text style={{marginTop: 10, color: '#007AFF'}}>
        {route.name}
      </Text>
    )
  },
  
}

const Login = require('./src/components/loginView')
const Notification = require('./src/components/notificationView')

export default class KyrosView_react extends Component {

  renderScene(route, navigator){
    switch (route.name){
      case 'Login':
        return(
          <Login navigator={navigator} route={route}/>
        )
      case 'Notification':
        return(
          <Notification navigator={navigator} route={route}/>
          
        )
    }
  }

  render() {
    return (
      <Navigator style={{backgroudColor: '#fff'}}
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        navigationBar={
          <Navigator.NavigationBar  
            routeMapper={NavigatorBarRouteMapper} />
        } />
    
    )
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

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

    if(route.name=='Login' || route.name=='Notification'){
      return null;
    }
    return(<TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={() => {
              if(index > 0){
                navigator.pop();
              }
          }}>

            <Text style={{marginTop: 10, marginLeft:20, color:'#007AFF'}}>Back</Text>
         </TouchableHighlight>
    )
  },

  RightButton: function(route){
    return null;
  },
  Title: function(route){
    if(route.name == 'Login' || route.name == 'Notification'){
      return null;
    }
    return(
      <Text style={{marginTop: 10, color:'#007AFF' }}>
        {route.name}
      </Text>
    )
  },
};

const Login = require('./src/components/loginView')
const Tabs = require('./src/components/tabs')

export default class KyrosView_react extends Component {

  renderScene(route, navigator){
    switch (route.name){
      case 'Login':
        return(
          <Login {...route.props} navigator={navigator} route={route}/>
        )
      case 'Notification':
        return(
          <Tabs {...route.props} navigator={navigator} route={route}/>
          
        )
    }
  }

render() {
    return (
      <Navigator style={styles.bar}
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
  bar:{
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('KyrosView_react', () => KyrosView_react);

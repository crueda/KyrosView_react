'use strict'

import React, { Component } from 'react';
import { View, TabBarIOS } from 'react-native'

const Notification = require('./notificationView');
const Map = require('./mapView');

class Tabs extends Component {


    constructor(props){
        super(props)

        this.state = {
            selectedTab: 'notification'
        }
    }

    render(){
            console.log('--> tabs');
        return(

            <TabBarIOS style={{backgroundColor: '#FFFFFF'}}>
                <TabBarIOS.Item 
                    title="Notification"
                    selected={this.state.selectedTab === 'notification'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'notification'
                        })
                    }}>
                <Notification navigator={this.props.navigator}/>
                </TabBarIOS.Item>
                
                <TabBarIOS.Item                 
                    title="Map"
                    selected={this.state.selectedTab === 'map'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'map'
                        })
                    }}>

                <Map/>
                </TabBarIOS.Item>
                
            </TabBarIOS>
        )
    }
}


module.exports = Tabs;
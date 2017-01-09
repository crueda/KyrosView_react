'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class notificationView extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Titulo}>>Soy el componente notificationView</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Titulo:{
        marginTop: 70,
        fontSize: 24
    },
})

module.exports = notificationView;
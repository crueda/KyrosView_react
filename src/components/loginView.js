'use strict'

import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableHighlight,
    Alert,
    StyleSheet
 } from 'react-native'

class loginView extends Component {
    render(){
        return(
            <Image source={{uri: 'https://images.unsplash.com/photo-1446305341947-847fd13db6c4?dpr=1&amp;auto=format&amp;fit=crop&amp;&amp;q=80&amp;cs=tinysrgb&amp;crop='}} style={styles.container} >
                <View >
                    <Text style={styles.Titulo}>Kyros</Text>
                    <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
                        <Text style={styles.Text}>Entrar</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        )
    }
    onLogin(){
        Alert.alert(
            'Acceso',
            'Te has logeado en el sistema',
            [
                {
                    text: 'Aceptar',
                    onPress: (this.aceptar.bind(this))
                },
                {
                    text: 'Cancelar',
                    onPress: (this.cancelar.bind(this))

                }
            ]
        )
    }

    aceptar() {
        //console.log("aceptar");
        this.props.navigator.replace({
            title: 'Notification',
            name: 'Notification',
            passProps: {}
        });
    }
    cancelar() {
        console.log("cancelar");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 50
    },
    boton:{
        width: 300,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1
    },
    TextoBoton:{
        color: 'white'
    },
    Titulo:{
        marginTop: 70,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
})
module.exports = loginView;
// Importamos as bibliotecas e componentes principais para nosso projeto
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Toast from 'react-native-toast-message';
import { Routes } from './src/routes';
//import Header from './src/components/Header.js';
//import Form from './src/components/Form.js';
//let logoLocal = require('./src/images/agenda.png');
//<ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }} imageStyle={{ opacity: 0.1 }}>
//<Header></Header>
//          <Form></Form>
//        </ImageBackground>

// Criamos a nossa classe App para renderizar nosso projeto
class App extends Component {
  render() {
   
    return (

      <View>
        <Routes/>
        <Toast/>
         
      </View>

    )
  }
}
// Informamos qual classe será renderizada no aplicativo
export default App;

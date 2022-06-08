// Importamos as bibliotecas e componentes principais para nosso projeto
//import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Toast from 'react-native-toast-message';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderHome } from './src/components/HeaderHome/Index.js';
import { HeaderForm } from './src/components/HeaderForm/Index.js';
import { Routes } from './src/routes/Index.js';
//import Form from './src/components/Form.js';
import Home from './src/screens/Home/Index.js';
import Form from './src/screens/Form/Index.js';
//let logoLocal = require('./src/images/agenda.png');
//<ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }} imageStyle={{ opacity: 0.1 }}>
//<Header></Header>
//          <Form></Form>
//        </ImageBackground>

// Criamos a nossa classe App para renderizar nosso projeto
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    console.log('Chamou a rota')
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HeaderHome} />
          <Stack.Screen name="Agenda" component={HeaderForm} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
// Informamos qual classe será renderizada no aplicativo
export default App;

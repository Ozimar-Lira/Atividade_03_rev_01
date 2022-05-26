import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MaterialIcon from 'material-icons-react';
//import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './Styles.js';

export function HeaderHome() {
  // const navigation = useNavigation();

  function handleAdd() {
    //  navigation.navigate("Form", {});
  }

  return (

    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/rodrigorgtic.png' }}
        style={styles.avatar}
      />

      <View style={styles.user}>
        <Text style={styles.title}>
          Olá, Ozimar Lira
        </Text>
        <Text style={styles.subtitle}>
          Bem Vindo a sua agenda.
        </Text>
      </View>


      <TouchableOpacity
        onPress={handleAdd}
        style={styles.button}
      >
      
      <Icon name="home" size={18} color="#999" />

      </TouchableOpacity>
    </View>
  );
}
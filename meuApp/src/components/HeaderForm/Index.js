import React from 'react';
//import { MaterialIcons } from '@expo/vector-icons';
//import MaterialIcon from 'material-icons-react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './Styles.js';

export function HeaderForm() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
  
      </TouchableOpacity>

      <Text style={styles.title}>
        Cadastro
      </Text>
    </View>
  );
}
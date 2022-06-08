import React from 'react';
//import { MaterialIcons } from '@expo/vector-icons';
//import MaterialIcon from 'material-icons-react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Styles.js';
import { Home } from '../../screens/Home/Index.js';
import Form from '../Form.js';

export function HeaderForm() {
  const navigation = useNavigation();
 // console.log('Entrou na HeanderForm')

  return (
    <View>
      <Form></Form>
    </View>
  );
}
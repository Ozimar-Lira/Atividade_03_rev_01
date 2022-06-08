import React, { Component, useState, useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image, Button, FlatList, StatusBar, ScrollView, Alert, SeparatorItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MaterialIcon from 'material-icons-react';
//import { MaterialIcons } from '@expo/vector-icons';
import { Lista } from '../Lista.js';
import { styles } from './Styles.js';
import { Home } from '../../screens/Home/Index.js';
import SafeAreaView from 'react-native-safe-area-view';
//import React, { Component, useState } from 'react';
import Form from '../Form.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Toast from 'react-native-toast-message';

/*const [dado, setDados] = useState([]);

const response = AsyncStorage.getItem("@tarefas: agenda");
const dados = response ? JSON.parse(response) : [];
setDados(dados);
console.log('A listagem é:'+ dado);
*/

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Forty Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fifty Item',
  }
];

/*const confirmarDelete = ({ id }) =>
  //(console.log(id));
  Alert.alert(
    "MENSAGEM DE ALERTA",
    "Deseja apagar essa tarefa?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Deletar", onPress: () => handleRemove(id) }
    ]
  );*/

export function HeaderHome({ navigation }) {

  const dataNow = new Date();

  const Item = ({ id, tarefa, data, checked, status }) => {
    return (
      <SafeAreaView style={styles.itemflex}>
        <BouncyCheckbox
          size={25}
          fillColor="red"
          isChecked={status}
          unfillColor="#FFFFFF"
          //text="Fechar!"
          iconStyle={{ borderColor: 'red' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
            fontWeight: 'bold',
          }}
          bounceFriction={5}
          style={styles.checkbox}
          onPress={() => confirmarFechamento({ id })}
        />
        <View style={styles.itemInfo} >
          <Text style={styles.itemP1}>{tarefa}</Text>
          <Text style={styles.itemP2}>{moment(data).format('DD/MM/YYYY')}</Text>
          <Text style={moment(data, 'YYYY/MM/DD').diff(moment(dataNow, 'YYYY/MM/DD'), 'days')<0 ? styles.atrasado: styles.noprazo}>{moment(data, 'YYYY/MM/DD').diff(moment(dataNow, 'YYYY/MM/DD'), 'days')<0 ? 'Atraso de:' + moment(data, 'YYYY/MM/DD').diff(moment(dataNow, 'YYYY/MM/DD'), 'days') + 'dias': 'No prazo'}</Text>
          <Text style={checked === 1 ? styles.aberto : styles.concluido}>{checked === 1 ? 'Prioritária' : 'Não Prioritária'}</Text>
          <Text style={status === true ? styles.concluido : styles.aberto}>{status === true ? 'Atividade Encerrada' : 'Atividade Aberta'}</Text>
        </View>
        <TouchableOpacity
          onPress={() => confirmarDelete({ id })}
          style={styles.button}>
          <Icon size={30} color="#FFF" name="trash" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const renderItem = ({ item }) => (
    <Item tarefa={item.tarefa} data={item.data} checked={item.checked} id={item.id} status={item.status} />
  );



//  const [tarefa, setTarefa] = useState('');
//  const [data, setData] = useState(new Date());
//  const [checked, setChecked] = useState(0);
//  const [status, setStatus] = useState(false);
//  const [open, setOpen] = useState(0);
  const [dados, setDados] = useState([]);


  const confirmarDelete = ({ id }) =>
    //(console.log(id));
    Alert.alert(
      "MENSAGEM DE ALERTA",
      "Deseja apagar essa tarefa?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Deletar", onPress: () => handleRemove(id) }
      ]
    );

  const confirmarFechamento = ({ id }) =>
    //  (console.log(id));
    Alert.alert(
      "MENSAGEM DE ALERTA",
      "Deseja encerrar a tarefa?",
      [
        {
          text: "Abrir",
          onPress: () => { },
          style: "cancel"
        },
        { text: "Fechar", onPress: () => handleAlter(id) }
      ]

    );


  async function handleAlter(id) {
    const response = await AsyncStorage.getItem("@tarefas: agenda");
    const previousData = response ? JSON.parse(response) : [];
    //   previousData.sort((a, b) => b.priori - a.priori);

    const index = previousData.map(item => item.id).indexOf(id);
    dados[index].status = !dados[index].status;
    AsyncStorage.setItem("@tarefas: agenda", JSON.stringify(dados));
    //  setData(data.sort((a, b) => b.priori - a.priori));
    //  setFeito(!feito);
  //  console.log(moment(item.data).diff(new Date(), 'days'));
  //  console.log('handleAlter   ' + JSON.stringify(dados));
    fetchData();
  }


  async function handleRemove(id) {
    const response = await AsyncStorage.getItem("@tarefas: agenda");
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter(item => item.id !== id);
    AsyncStorage.setItem("@tarefas: agenda", JSON.stringify(data));
    // setData(data.sort((a, b) => b.priori - a.priori));
    // setFeito(!feito);
    fetchData();
    console.log(data);
    console.log('handleRemove   ' + JSON.stringify(data));


  }

  async function fetchData() {
    const response = await AsyncStorage.getItem("@tarefas: agenda");
    const dados = response ? JSON.parse(response) : [];
    setDados(dados);
    console.log('fetchData   ' + JSON.stringify(dados));
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );



  // const navigation = useNavigation();
  //console.log('Entrou na HeanderHome')

  function handleAdd() {
    console.log('Clicou no botao')
    //   navigation.navigate("Form", {});

  }

  return (

    <View>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=33' }}
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
          onPress={() => navigation.navigate('Agenda')}
          style={styles.button}
        >

          <Icon name="plus" size={45} color="#FFF" />

        </TouchableOpacity>

      </View>
      <View>
        <SafeAreaView style={styles.containerflex}>
          <FlatList
            ItemSeparatorComponent={SeparatorItem}
            data={dados}
            renderItem={renderItem}
            keyExtractor={item => item.id}

          />
        </SafeAreaView>
      </View>
    </View>

  );
}

export default HeaderHome;
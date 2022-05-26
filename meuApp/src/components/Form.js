import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
//import AsyncStorage from 'AsyncStorage';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/pt-br';
// import {CheckBox} from 'react-native-community';
//import CheckBox from '@react-native-community/checkbox';
import { form } from '../styles/index.js';
import uuid from 'react-native-uuid';

const Form = () => {

    moment.updateLocale('pt-br');

    const [tarefa, setTarefa] = useState('');
    const [data, setData] = useState(new Date());
    const [checked, setChecked] = useState(0);
    const [status, setStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const [dados, setDados] = useState([]);

    async function saveDados() {
        try {
            const id = uuid.v4();

            const newDados = {
                id,
                tarefa,
                data,
                checked,
                status
            };

            const response = await AsyncStorage.getItem("@tarefas: agenda");
            const previusDados = response ? JSON.parse(response) : [];
            const dados = [...previusDados, newDados]

            await AsyncStorage.setItem("@tarefas: agenda", JSON.stringify(dados));

            Toast.show({
                type: 'sucess',
                text1: 'Cadastrado com Sucesso'
            })
            console.log(newDados);
        }
        catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro no AsyncStorage'
            })
            console.log(error);

        }

    }

    async function listDados() {
        try {
            const response = await AsyncStorage.getItem("@tarefas: agenda");
            const dados = response ? JSON.parse(response) : [];
            setDados(dados);

            Toast.show({
                type: 'sucess',
                text1: 'Listagem emitida com Sucesso'
            })
            console.log(dados);
        }
        catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro na Listagem'
            })
            console.log(error);

        }

    }


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setOpen(false);
    };

    const handleConfirm = (date) => {
        console.log("Uma data foi escolhida:" + date);
        hideDatePicker();
        setOpen(false);
        setData(date);
    };

    return (
        <View style={form.container}>
            <Text style={form.texts}>Nova Tarefa: </Text>
            <TextInput placeholder="Insira uma nova Tarefa" style={form.inputs} onChangeText={text => setTarefa(text)} />
            <Text></Text>
            <Text style={form.texts}>Data Tarefa: </Text>

            <View style={form.container}>
                <TouchableOpacity onPress={() => setOpen(true)} style={form.input}>
                    <Text style={form.data}>{moment(data).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={data}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <Text></Text>
            <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                text="Prioridade!"
                iconStyle={{ borderColor: 'red' }}
                textStyle={{
                    fontFamily: 'JosefinSans-Regular',
                    textDecorationLine: 'none',
                    fontWeight: 'bold',
                }}
                bounceFriction={5}
                style={form.checkbox}
                onPress={() => setChecked(checked === 0 ? 1 : 0)}
            />
            <Button title="Cadastrar" onPress={saveDados}></Button>
            <Button title="Listar" onPress={listDados}></Button>
            <View>
                {/* Chamamos nossos States para serem exibidos os valores */}
                <Text>Tarefa: {tarefa}</Text>
                <Text>Prioridade: {checked} </Text>
                <Text>Data: {String(data)}</Text>


            </View>
            < View >
                < Button title="Show Date Picker" onPress={showDatePicker} />
                < DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

        </View>
    );
}

export default Form;
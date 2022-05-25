import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/pt-br';
// import {CheckBox} from 'react-native-community';
//import CheckBox from '@react-native-community/checkbox';
import { form } from '../styles/index.js';
//import uuid from 'react-native-uuid';

const Form = () => {

    moment.updateLocale('pt-br');

    const [tarefa, setTarefa] = useState('');
    const [data, setData] = useState(new Date());
    const [checked, setChecked] = useState(0);
    const [open, setOpen] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warning("Uma data foi escolhida: ", data);
        hideDatePicker();
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
                    onConfirm={data => {
                        setOpen(false);
                        setData(data);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
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
            <Button title="Pronto!"></Button>
            <View>
                {/* Chamamos nossos States para serem exibidos os valores */}
                <Text>Tarefa: {tarefa}</Text>
                <Text>Prioridade: {checked} </Text>
            </View>
            < View >
                < DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
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
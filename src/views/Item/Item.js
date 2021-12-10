import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloItem from './estiloItem';

function Item(){
    <View style={estiloItem.container}>
        <View style={estiloItem.borda}>
            
            <Text style={estiloItem.texto}>Item</Text>

            <TouchableOpacity> style={estiloItem.botaoContainer} 
                <Text style={estiloItem.botaotexto}>Voltar</Text>
            </TouchableOpacity>

        </View>
    </View>
}

export default Item;
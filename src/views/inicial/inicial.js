import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloinicial from './estiloinicial';

function Inicial({navigation}){

    const abrirColecao = ()=> {
        navigation.navigate('Colecao')
    }

    const abrirItem = ()=> {
        navigation.navigate('Item')
    }
     
    return (
        <View style={estiloinicial.container}>
            <View style={estiloIinicial.borda}>

                <Text style={estiloinicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloinicial.botaoContainer}>
                <Text style={estiloinicial.botaoContainer}>Coleção</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={estiloinicial.botaoContainer}>
                    <Text style={estiloinicial.botaoTexto}>Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Inicial;
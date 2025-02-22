import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({navigation}){

    const voltar = ()=> {
        navigation.goBack();
    }

    return(
        <View style={estiloColecao.container}>
            <View stle={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Coleção</Text>

                <TouchableOpacity> style={estiloColecao.botaoContainer} onePress={voltar}
                    <Text style={estiloColecao.botaotexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Colecao;

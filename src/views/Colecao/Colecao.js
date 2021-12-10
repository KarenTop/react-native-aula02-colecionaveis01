import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao(){
    return(
        <View style={estiloColecao.container}>
            <View stle={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Coleção</Text>

                <TouchableOpacity> style={estiloColecao.botaoContainer} 
                    <Text style={estiloColecao.botaotexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Colecao;

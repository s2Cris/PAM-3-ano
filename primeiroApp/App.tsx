// Cristian Emanuel Marcheti e Maria Luiza Bonato - 3º D.S.

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {

  const [valor, setValor] = useState(0);
  const [mensagem, setMensagem] = useState('');

  function corValor(){
    if (valor > 0) {
      return 'green';
    } else if (valor < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  function somarValor(){
    if (valor >= 10) {
      setMensagem("Você clicou muitas vezes!");
    } else {
      setValor(valor + 1);
    }
  }

  function subtrairValor(){
    if (valor <= -10) {
      setMensagem("Você clicou muitas vezes!");
    } else {
      setValor(valor - 1);
    }
  }

  function zerarValor(){
    setValor(0);
    setMensagem('');
  }
  

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Contador
      </Text>

      <Text style={styles.texto}>
        {mensagem}
      </Text>

      <Text style={[styles.texto, { color: corValor() }]}>
        {valor}
      </Text>

      <View style={{flexDirection:'column', width: '30%', marginTop: 20 , marginBottom: 20}}>
      <Button
        title="Somar 1"
        onPress={somarValor}
      />
      </View>

      <View style={{flexDirection:'column', width: '30%', marginBottom: 20}}>
      <Button
        title="Subtrair 1"
        onPress={subtrairValor}
      />
      </View>

      <View style={{flexDirection:'column', width: '30%', marginBottom: 20}}>
      <Button
        title="Zerar contador"
        onPress={zerarValor}
      />
      </View>
    
    </View>
      
    
  )};



const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',  
    backgroundColor:'#daf0ff'
  },

  titulo:{
    fontSize:26,
    fontWeight:'bold',
    marginBottom:20
  },

  texto:{
    fontSize:18,
    marginBottom:20
  }

});
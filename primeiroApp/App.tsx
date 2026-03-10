// Cristian Emanuel Marcheti - 3º D.S.

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {

  const [mensagem, setMensagem] = useState("Posso entrar?");

  function mudarMensagem(){
    setMensagem("Querido entre!")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meu Primeiro App 
      </Text>

      <Text style={styles.texto}>
        {mensagem}
      </Text>

      <Button
        title="Clique aqui"
        onPress={mudarMensagem}
      />

      </View>
    
  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffc6c6'
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

})
// Cristian Emanuel Marcheti e Maria Luiza Bonato - 3º D.S.

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {

  const [valor, setValor] = useState(0); //variável de estado para o valor do contador
  const [mensagem, setMensagem] = useState(''); //variável de estado para a mensagem de aviso

  function corValor(){  //função para definir a cor do valor do contador
    if (valor > 0) {
      return 'green';
    } else if (valor < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  function somarValor(){ //função para somar 1 ao valor do contador
    if (valor >= 10) {
      setMensagem("Você clicou muitas vezes!");
    } else {
      setValor(valor + 1);
    }
  }

  function subtrairValor(){ // função para subtrair 1 do valor do contador
    if (valor <= -10) {
      setMensagem("Você clicou muitas vezes!");
    } else {
      setValor(valor - 1);
    }
  }

  function zerarValor(){  //função para zerar o valor do contador e a mensagem de aviso
    setValor(0);
    setMensagem('');
  }
  

  return (

    /* Container com o conteúdo principal: 
    - Títulos com os nomes dos autores e a função do aplicativo
    - Texto para exibir a mensagem de aviso
    - Texto para exibir o valor do contador, com a cor definida pela função corValor()
    - Botões para somar, subtrair e zerar o contador
    */

    <View style={styles.container}>
      
      <Text style={styles.titulo1}>
        Cristian Marcheti e
      </Text>

      <Text style={styles.titulo1}> 
        Maria Luiza Bonato - 3º D.S.
      </Text>

      <Text style={styles.titulo2}>
        Contador
      </Text>

      <Text style={styles.texto}>
        {mensagem} 
      </Text>

        
      <Text style={[styles.texto, { color: corValor() }]}> 
        {valor} 
      </Text>

      <View style={{flexDirection:'column', width: '30%', marginTop: 20 , marginBottom: 20}}>
      <Button // Botão para somar 1 ao contador
        title="Somar 1"
        onPress={somarValor}
      />
      </View>

      <View style={{flexDirection:'column', width: '30%', marginBottom: 20}}>
      <Button // Botão para subtrair 1 do contador
        title="Subtrair 1"
        onPress={subtrairValor}
      />
      </View>

      <View style={{flexDirection:'column', width: '30%', marginBottom: 20}}>
      <Button // Botão para zerar o contador e a mensagem de aviso
        title="Zerar contador"
        onPress={zerarValor}
      />
      </View>
    
    </View>
      
    
  )};

// Estilos para a interface do aplicativo

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',  
    backgroundColor:'#daf0ff'
  },
  
  titulo1:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15
  },

  titulo2:{
    fontSize:26,
    fontWeight:'bold',
    marginBottom:20,
    marginTop: 20
  },

  texto:{
    fontSize:18,
    marginBottom:20
  }

});
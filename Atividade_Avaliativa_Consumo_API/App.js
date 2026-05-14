// Cristian Marcheti - 3º ADS
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';

export default function App() {
  const [imagem, setImagem] = useState(null);
  const [carregando, setCarregando] = useState(true);

  async function carregarCachorro(){
    try {
      setCarregando(true);
      const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
      const dados = await resposta.json();
      setImagem(dados.message);
    } catch (error) {
      console.error('Erro ao carregar imagem do cachorro:', error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarCachorro();
  }, []);

  return (

    <View style={styles.container}>
      
      <Text style={styles.titulo2}>Cristian Marcheti - 3º ADS</Text>
      <Text style={styles.titulo1}>Carregar Imagem de Cachorro</Text>
      <Text style={styles.titulo2}>Aleatória</Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Image source={{ uri: imagem }} style={styles.imagem} />
      )}
      <Button title="Carregar outro cachorro" onPress={carregarCachorro} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#e3fffc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo1:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    alignContent: 'center',
    justifyContent: 'center', 
  },
  titulo2:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center', 
  },
  imagem:{
    width: 250,
    height: 250,
    marginTop: 20,  
    marginBottom: 40,
    borderRadius: 10,
  },
});

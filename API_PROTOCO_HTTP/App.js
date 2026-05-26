// Dupla Cristian Marcheti e João Pedro Bonato - 3º ADS
import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarDados() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setDados(json);
      } catch (error) {
        setErro('Erro ao buscar dados');
      } finally {
        setLoading(false);
      }
    }

    buscarDados();
  }, []);

  // 🔄 LOADING
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  // ❌ ERRO
  if (erro) {
    return (
      <View style={styles.center}>
        <Text>{erro}</Text>
      </View>
    );
  }

  // 📋 LISTA
  return (
    <View style={styles.container}>
      <FlatList
      data={dados}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false} // tira a barrinha lateral
      renderItem={({ item }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.address.city}</Text>
      </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e8f8ff'
  },
  item: {
    backgroundColor: '#d6f2ff', // 🔥 branco em vez de cinza
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3 // sombra Android
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
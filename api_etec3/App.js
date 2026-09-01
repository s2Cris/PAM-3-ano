import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator,  TextInput, TouchableOpacity, Alert, Platform  } from 'react-native';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  // Estados para capturar os dados do formulário
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [usuarioEditandoId, setUsuarioEditandoId] = useState(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        setCarregando(false);
      });
  }, []);

  const limparFormulario = () => {
    setNome('');
    setEndereco('');
    setUsuarioEditandoId(null);
  };

  const adicionarUsuario = () => {
    if (!nome.trim() || !endereco.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o nome e o endereço.');
      return;
    }

    if (usuarioEditandoId) {
      setUsuarios((prevUsuarios) =>
        prevUsuarios.map((usuario) =>
          usuario.id === usuarioEditandoId
            ? {
                ...usuario,
                name: nome,
                address: {
                  ...usuario.address,
                  street: endereco,
                },
              }
            : usuario
        )
      );

      limparFormulario();
      return;
    }

    const novoUsuario = {
      id: Date.now().toString(),
      name: nome,
      address: {
        street: endereco,
        suite: '',
        city: '',
      },
    };

    setUsuarios((prevUsuarios) => [novoUsuario, ...prevUsuarios]);
    limparFormulario();
  };

  const removerUsuario = (id) => {
    if (Platform.OS === 'web') {
      const confirmarExclusao = window.confirm('Deseja realmente excluir este usuário?');

      if (confirmarExclusao) {
        setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
      }

      return;
    }

    Alert.alert(
      'Confirmação',
      'Deseja realmente excluir este usuário?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
          },
        },
      ]
    );
  };

  const editarUsuario = (usuario) => {
    setUsuarioEditandoId(usuario.id);
    setNome(usuario.name);
    setEndereco(usuario.address.street);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cristian & Maria Luiza</Text>
      <Text style={styles.titulo}>Sistema de Cadastro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />

        <TouchableOpacity style={styles.botao} onPress={adicionarUsuario}>
          <Text style={styles.textoBotao}>
            {usuarioEditandoId ? 'Salvar Alterações' : 'Cadastrar'}
          </Text>
        </TouchableOpacity>

        {usuarioEditandoId && (
          <TouchableOpacity style={styles.botaoCancelar} onPress={limparFormulario}>
            <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.name}</Text>
              <Text style={styles.endereco}>
                {item.address.street}, {item.address.suite} - {item.address.city}
              </Text>

              <TouchableOpacity
                style={styles.botaoRemover}
                onPress={() => removerUsuario(item.id)}
              >
                <Text style={styles.textoBotaoRemover}>Remover</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() => editarUsuario(item)}
              >
                <Text style={styles.textoBotaoEditar}>Editar</Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.lista}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94e6ff',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#0293be',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: 260,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  botao: {
    backgroundColor: '#005974',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoCancelar: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoCancelar: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  lista: {
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  endereco: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  botaoRemover: {
    backgroundColor: '#c0392b',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoRemover: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  botaoEditar: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoEditar: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
}); 
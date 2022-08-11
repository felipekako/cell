import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useState} from 'react';
export default function App() {
  const [nome,setnome] = useState('cebola');
  const [sessao, setSessao] = useState('miions');
  const [exibindo, setExibindo] = useState('true');

  const clicado = () =>{
    setSessao('thor');
    setnome('batata');
    setExibindo('false');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> { nome}</Text>
      <Text style={styles.titulo}> { sessao}</Text>
      <Text style={styles.titulo}> { exibindo ? "esta em sessão" : "acabou:("}</Text>
      <StatusBar style="auto" />
      <Button title ='trocar sesão' onPress={clicado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64732F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color:"#D99036",
    fontSize:30,
  }
});

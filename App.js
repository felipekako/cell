import { SafeAreaView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
export default function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon',{
      method:'GET',
      heathers:{
        'Accept': 'aplication/json',
      }
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      setPokemons(data.results)
    })
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={PokemonShow}
      />
    </SafeAreaView>
  );
}
function PokemonShow(item){
  const {name,url}  = item.item
  const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon','')
  const ImageUrl = 'https://cdn.traction.one/pokedex/pokemon' +pokemonNumber+'.png'
  
  return(
    <View style={pokemonEstilo.card}>
      <Image style={{width:100, height:100}}
             source={{uri: ImageUrl.replace('/.png','.png')}}
      />
      <Text>{name}</Text>
    </View>
  )
}

const pokemonEstilo = StyleSheet.create({
  card: {
    flexDirection: 'row',
    whidth: '350',
    height: '350' ,
    backgroundColor: '#00FFFF',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5',
  },
  Imagem:{
    width: 300,
    height: 300, 
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#150526',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#F25C05',
    fontSize: 28,
  },
  paragrafo:{
    fontSize:12,
    color:'#F20505',
  }
});

const NomePokemon = styled.text







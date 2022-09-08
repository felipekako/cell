import { SafeAreaView, FlatList, Image, StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';
export default function App() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styled.titleWrapper
      }>
        <Text style={styled.Text}>markets</Text>
      </View>
     < View style={styles.divider}></View>
     <ListItem/>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#4F4F4F",
    flex:1,
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DCDCDC",
    marginHorisontal: 16,
    marginTOp: 16,

  }
})